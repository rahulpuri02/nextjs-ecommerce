import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const SkeltonProduct = () => {
  return (
    <div className="flex flex-col gap-2 mb-6 md:mb-10">
    <Skeleton className="w-full h-[260px] sm:h-[800px] md:h-[820px] rounded" />
    {/* Product Details */}
    <div className="flex flex-col mt-[9px] gap-[1.5px] pl-2 md:ml-[1px] text-xs sm:text-lg">
      <Skeleton className="w-3/4 h-4" />
      <div className="flex items-center gap-1.5">
        <Skeleton className="ml-[1px] sm:ml-[2px] w-12 h-4 hidden" />
      </div>
      <Skeleton className="w-1/4 h-4" />
    </div>
  </div>
  )
}

export default SkeltonProduct