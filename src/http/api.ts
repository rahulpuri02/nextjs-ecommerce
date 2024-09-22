import { Product } from "@/types";
import { api } from "./client"

export const getProducts = async () => {
  const response =  await api.get('/products');
  return response.data as Product[];
}

export const getProduct = async (id: number) => {
  const response =  await api.get('/products/' + id);
  return response.data as Product;
}