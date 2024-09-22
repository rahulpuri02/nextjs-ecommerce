import { Product } from "@/types";
import Image from "next/image";
import React from "react";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-2 mb-6 md:mb-10 relative">
        {/* FAV ICON  */}
        <button className="absolute right-1 top-2 md:top-4 z-10">
        <svg
          className="stroke-1 h-5 w-[15px] md:h-8 md:w-12 stroke-black fill-none"
          viewBox="0 0 13 16"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            viewBox="0 0 13 16"
            d="M6.12633 8.91907 1 14.6851V.5h11v14.1851L6.87367 8.91907 6.5 8.49876l-.37367.42031Z"
            strokeMiterlimit="10"
          ></path>
        </svg>
      </button>
      <Image
        src={product.thumbnail}
        alt={product.name}
        width={600}
        height={600}
      />
      {/* Product Details */}
      <div className="flex flex-col mt-[9px] gap-[1.5px] pl-2 md:ml-[1px] text-xs sm:text-lg">
        <p>
          {product.brand} - {product.name}
        </p>
        <div className="flex items-center gap-1.5">
          {Array.from({ length: product.colors.length }).map((_, i) => (
            <div
              className="w-2 h-2 md:w-3.5 md:h-3.5 bg-customBlue"
              key={i}></div>
          ))}
          {product.colors.length > 3 && (
            <div className="ml-[1px] sm:ml-[2px] tracking-wide hidden">
              +{product.colors.length - 3}
            </div>
          )}
        </div>
        <p>₹ {product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
