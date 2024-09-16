'use client'

import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'




const NewArrivals: React.FC = ()  => {
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
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/2 sm:basis-1/3 md:pl-7">
            <div>
              <Card className='p-0 border-none'>
                <CardContent className="flex aspect-square p-0">
                  <Image 
                  src={'https://res.cloudinary.com/dlt5cfo8m/image/upload/v1726340969/yxcnuytpyx6i1w1hxzb1.jpg'}
                  alt='ddd'
                  width={750}
                  height={750}
                  />
                </CardContent>
                {/* Details */}
                <div className='flex flex-col mt-[9px] gap-[1.5px] pl-2 md:pl-[1px] text-xs sm:text-base'>
                  <p>Zara - Wool Jacket</p>
                  <div className='flex items-center gap-1.5'>
                  {
                      Array.from({length: 3}).map((_,i) => (
                        <div className='w-2 h-2 md:w-3 md:h-3 bg-customBlue' key={i}></div>
                      ))
                    }
                  <div className='ml-[1px] sm:ml-[2px] tracking-wide'>+5</div>
                  </div>
                  <p>₹ 1,550.00</p>
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
   </div>
  )
}

export default NewArrivals