"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { DataTable } from "../_components/data-table";
import { columns } from "./_components/columns";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/http/api";
import { Loader2 } from "lucide-react";

const ProductsPage = () => {
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  if (isError) {
    return <p className="text-red-500">Something went wrong</p>;
  }
  return (
    <>
      <div className="flex items-center justify-between mx-2 md:mx-0">
        <h3 className="text-2xl font-bold tracking-tight">Products</h3>
        <Button size={"sm"}>Add Product</Button>
      </div>
      {!isLoading ? (
        <DataTable data={products} columns={columns} />
      ) : (
        <div className="flex items-center justify-center animate-spin">
          <Loader2 />
        </div>
      )}
    </>
  );
};

export default ProductsPage;
