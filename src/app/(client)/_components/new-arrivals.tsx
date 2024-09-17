'use client'

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton from shadcn
import Image from 'next/image';
import { Product } from '@/types';

type NewArrivalsProps = {
  isLoading: boolean;
  newProducts: Product[];
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ isLoading, newProducts }) => {
  return (
    <div className="px-6 md:px-14 xl:px-32 py-6 md:py-10">
      <h2 className="font-medium text-[4vw] sm:text-[2vw] text-center mb-6 md:mb-8">New Arrivals</h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full"
      >
        <CarouselContent>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:pl-7">
                <Card className="p-0 border-none">
                  <CardContent className="flex aspect-square p-0">
                    <Skeleton className="w-full h-full" />
                  </CardContent>
                  {/* Skeleton Details */}
                  <div className="flex flex-col mt-[9px] gap-[1.5px] pl-2 md:pl-[1px] text-xs sm:text-base">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-4 w-1/4" />
                  </div>
                </Card>
              </CarouselItem>
            ))
          ) : (
            newProducts.length > 0 && newProducts?.map((product, index: number) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:pl-7">
                <Card className="p-0 border-none">
                  <CardContent className="flex aspect-square p-0">
                    <Image
                      src={product.thumbnail}
                      alt={product.name}
                      width={750}
                      height={750}
                    />
                  </CardContent>
                  {/* Product Details */}
                  <div className="flex flex-col mt-[9px] gap-[1.5px] pl-2 md:ml-[1px] text-xs sm:text-lg">
                    <p>{product.brand} - {product.name}</p>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: product.colors.length }).map((_, i) => (
                        <div className="w-2 h-2 md:w-3.5 md:h-3.5 bg-customBlue" key={i}></div>
                      ))}
                      {/* <div className="ml-[1px] sm:ml-[2px] tracking-wide hidden">+{product.extraColors}</div> */}
                    </div>
                    <p>₹ {product.price}</p>
                  </div>
                </Card>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewArrivals;