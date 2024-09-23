'use client'

import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton'; // Import Skeleton from shadcn
import Image from 'next/image';
import { Product } from '@/types';
import Link from 'next/link';

type NewArrivalsProps = {
  isLoading: boolean;
  newProducts: Product[];
  heading?: string;
};

const NewArrivals: React.FC<NewArrivalsProps> = ({ isLoading, newProducts, heading }) => {
  return (
    <div className="px-6">
      <h2 className="font-normal text-base md:text-xl xl:text-2xl uppercase tracking-normal text-center mb-8 md:mb-14 mt-5 md:mt-14">{heading ? heading : 'New Arrivals'}</h2>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full border-none"
      >
        <CarouselContent>
          {isLoading ? (
            Array.from({ length: 10 }).map((_, index) => (
              <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:pl-3 border-none">
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
            newProducts.length > 0 && newProducts?.concat(newProducts).map((product, index: number) => (
              <CarouselItem key={index} className="basis-1/2 md:basis-1/3 md:pl-3">
             <Link href={`/products/${product.id}`}>
             <Card className="p-0 border-none">
                  <CardContent className="flex aspect-square p-0">
                    <Image
                    className='w-full h-auto'
                      src={product.thumbnail}
                      alt={product.name}
                      width={800}
                      height={800}
                    />
                  </CardContent>
                  {/* Product Details */}
                  <div className="flex flex-col mt-[9px] gap-[1.5px] pl-2 md:ml-[1px] text-xs sm:text-sm">
                    <p>{product.brand} - {product.name}</p>
                    <div className="flex items-center gap-1.5">
                      {Array.from({ length: product.colors.length }).map((_, i) => (
                        <div className="w-2 h-2 md:w-3.5 md:h-3.5 bg-customBlue" key={i}></div>
                      ))}
                     {
                      product.colors.length > 3 && (
                        <div className="ml-[1px] sm:ml-[2px] tracking-wide hidden">+{product.colors.length-3}</div>
                      )
                     }
                    </div>
                    <p>₹ {product.price}</p>
                  </div>
                </Card>
             </Link>
              </CarouselItem>
            ))
          )}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewArrivals;