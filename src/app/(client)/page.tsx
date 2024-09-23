'use client'

import { getProducts } from "@/http/api";
import NewArrivals from "./_components/new-arrivals";
import { useQuery } from "@tanstack/react-query"
import { Product } from "@/types";

export default function Home() {

 const {data: newProducts, isFetching} = useQuery({
  queryKey: ['new-arrivals'],
  queryFn: getProducts,
 })

  return (
<div className="w-full min-h-screen mb-14 md:mb-20">
<div className="w-full h-screen relative">
   <video className="w-full h-full object-cover" muted loop autoPlay src="https://res.cloudinary.com/dlt5cfo8m/video/upload/v1726345212/Fronpage-essentials-compressed_1080-x-1920_online-video-cutter.com.mp4" />
   <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white tracking-tight">
        <p className="mb-[1.8vw] font-medium  text-[4.5vw] sm:text-[3.4vw] lg:text-[2vw]">{`NN CLOTHING ${String(new Date().getFullYear()).slice(2)} Style`}</p>
        <button className="font-base border-2 py-1.5 md:py-3 px-9 md:px-12 tracking-wide text-xs md:text-lg mt-2.5 lg:mt-0">DISCOVER NOW</button>
      </div>
  </div>

  {/* New Arivals */}
  <div className="mt-10">
  <NewArrivals isLoading={isFetching} newProducts={newProducts as Product[]} />
  </div>
</div>
  );
}
