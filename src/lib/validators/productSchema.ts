import { Category, Size } from "@/types";
import { z } from "zod";

export const productSchema = z.object({
  name: z.string({ message: "Name should be string" }).min(3),
  images: z
    .instanceof(File)
    .refine((file) => file.type.startsWith("image"))
    .array(),
    thumbnail: z.instanceof(File).refine((file) => file.type.startsWith('image')),
  brand: z.string().min(3),
  sizes: z.string().array(),
  description: z
    .string()
    .min(30, { message: "Should be more than 10 characters" }),
  category: z.nativeEnum(Category, { message: "Invalid category" }),
  price: z.number().positive().min(100),
  colors: z.string().array(),
  stock: z.array(
    z.object({
      color: z.string(),
      sizes: z.array(
        z.object({
          size: z.nativeEnum(Size, { message: "Invalid Size" }),
          qty: z.number().positive(),
        })
      ),
    })
  ),
});
