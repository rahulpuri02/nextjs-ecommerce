import { StatusCode } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import path from "path";
import { z } from "zod";
import fs from 'fs/promises';
import { productSchema } from "@/lib/validators/productSchema";
import { generateFolderName } from "@/lib/helper";
import { db } from "@/lib/db/db";
import cloudinary, {v2}  from "cloudinary";
import config from "@/lib/config";
import { products } from "@/lib/db/schema";

export type Product = z.infer<typeof productSchema>;

cloudinary.v2.config({
  cloud_name: config.cloudinary.cloudName,
  api_key: config.cloudinary.apiKey,
  api_secret: config.cloudinary.apiSecret
});

export async function POST(req: NextRequest) {
  let requestData;
  try {
    requestData = await req.formData();
  } catch (err) {
    NextResponse.json({ message: "Unable to parse form data" },{ status: StatusCode.BAD_REQUEST });
  }
  const product = {
    name: requestData?.get("name"),
    brand: requestData?.get("brand"),
    category: requestData?.get("category"),
    images: requestData?.getAll("images") as File[],
    sizes: JSON.parse(requestData?.get("sizes") as string),
    description: requestData?.get("description"),
    stock: typeof JSON.parse(requestData?.get("stock") as string) === 'string' ? JSON.parse(JSON.parse(requestData?.get("stock") as string)) : JSON.parse(requestData?.get("stock") as string),
    colors: JSON.parse(requestData?.get("colors") as string),
    price: Number(requestData?.get("price") as string),
  };
  const { name,  brand, category, images, sizes, description, stock, colors, price} = product;
  if ( !name || !brand || !category || !images || !sizes || !description || !stock || !price || !colors) {
    return NextResponse.json({ message: "All fields are required" }, {status: StatusCode.BAD_REQUEST});
  } 
  let validateData;
   try {
    validateData = productSchema.parse(product)
   }catch(err){
    return NextResponse.json({message: err}, {status: StatusCode.BAD_REQUEST})
   }
  
   try {
    const folderName = generateFolderName(validateData.name, 6);
    const imagesUrls = [];
    for(const image of product.images){
      const fileName = `${new Date().getTime()}.${image.type.split('/').at(-1)}`
      const filePath = path.join(process.cwd(), 'public/uploads', fileName);
      const buffer = Buffer.from(await image.arrayBuffer());
       await fs.writeFile(filePath, buffer);
      const result = await v2.uploader.upload(filePath, {
        folderName: `nextjs-ecommerce/products/${folderName}`,
        resource_type: 'image',
       })
       imagesUrls.push(result.secure_url);
       await fs.unlink(filePath);
    }
    //todo delete images from cloudinary if server fails
    await db.insert(products).values({...validateData, images: imagesUrls})
     return NextResponse.json({ message: "OK" }, { status: StatusCode.OK });
   } catch(err){
   return  NextResponse.json({message: 'Eror while product to database'}, {status: StatusCode.INTERNAL_SERVER_ERROR})
   }
}

export async function GET(){
  try {
  const allProducts =  await db.select().from(products);
  return NextResponse.json(allProducts, {status: StatusCode.OK})
  }catch(err){
    return NextResponse.json({message: 'Unable to fetch products from database'}, {status: StatusCode.INTERNAL_SERVER_ERROR})
  }
}



