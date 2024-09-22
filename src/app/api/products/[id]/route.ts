import { db } from "@/lib/db/db";
import { products } from "@/lib/db/schema";
import { StatusCode } from "@/types";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const productId = params.id;
  if (!productId) {
    return NextResponse.json(
      { message: "Product Id is required" },
      { status: StatusCode.BAD_REQUEST }
    );
  }
  const resultProduct = await db
    .select()
    .from(products)
    .where(eq(products.id, Number(productId)));
  if (!resultProduct || !resultProduct.length) {
    return NextResponse.json(
      { message: "No Product is found" },
      { status: StatusCode.NOT_FOUND }
    );
  }
  return NextResponse.json(resultProduct[0], { status: StatusCode.OK });
}
