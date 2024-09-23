"use client";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { getProduct, getProducts } from "@/http/api";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";
import FavIcon from "../../_components/icons/fav-icon";
import { Button } from "@/components/ui/button";
import ProductFitAndInfoCard from "../../_components/product-fit-and-info-card";
import NewArrivals from "../../_components/new-arrivals";

const ProductPage = () => {
  const { id } = useParams();
  const { data: product } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProduct(+id as number),
  });
 
  const { data: recommendadProducts, isFetching } = useQuery({
    queryKey: ["recommended-products"],
    queryFn: getProducts,
  });

  return (
    <div className="w-full mb-14 md:mb-20 min-h-[160vh]">
      {product && (
        <div className="flex flex-col gap-6 md:gap-10">
          <div className="xl:hidden w-full max-h-screen">
            {product && product.images.length && (
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full">
                <CarouselContent>
                  {product.images.map((image, index) => (
                    <CarouselItem key={index} className="basis-full p-0">
                      <Card className="p-0 border-none">
                        <Image
                        className="h-screen w-screen"
                          src={image}
                          width={1080}
                          height={1080}
                          alt={image}
                          placeholder="blur"
                          blurDataURL={product.thumbnail}
                        />
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            )}
          </div>
          {/* Product Headers  */}
          <div className="px-6">
            <div className="mt-4">
              <div className="flex flex-col font-normal text-lg md:text-2xl tracking-normal">
                <div className="w-full flex justify-between">
                  <h2 className="capitalize">{product?.brand}</h2>
                  <FavIcon />
                </div>
                <div>{product?.name}</div>
              </div>
              {/* Product Details  */}
              <div className="text-xs md:text-sm flex flex-col gap-4 md:gap-6 mt-4 md:mt-6">
                <p>₹ {product.price}</p>
                <p>
                  Casual poplin shirt crafted in a soft TENCEL™ lyocell and Pima
                  cotton blend, designed with a wide placket and a large collar.
                  Complete with Mother-of-Pearl buttons with NN CLOTHING logo.
                </p>
                <div>
                  COLOR: NAVY BLUE
                  <div className="flex gap-4 mt-3 md:mt-4 ml-1">
                    <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                    <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                    <div className="w-3 h-3 rounded-full bg-customBlue"></div>
                  </div>
                </div>
                {/* Size Guide In Future  */}
                {/* <div>
                   <p>SIZE GUIDE</p>
                </div> */}
              </div>
              <Button
                size={"default"}
                className="mt-5 md:mt-6 w-full text-xs md:text-sm font-normal">
                ADD TO CART
              </Button>
              <p className="text-customGray font-light text-[9px] md:text-xs mt-2">
                SAME DAY DISPATCH - ORDER BERFORE 1 PM IST FREE SHIPPING ABOVE ₹500
              </p>
              {/* Product Fit And Care Info  */}
              <ProductFitAndInfoCard />
            </div>
          </div>
        </div>
      )}
      <div className="p-6 pb-0 text-xs md:text-sm">
       <NewArrivals isLoading={isFetching} newProducts={recommendadProducts?.length ? recommendadProducts : []} heading='RECOMMENDED FOR YOU' />
      </div>
    </div>
  );
};

export default ProductPage;
