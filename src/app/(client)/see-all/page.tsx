'use client'
import React from 'react'
import ProductCard from '../_components/Product-card'
import { useQuery } from '@tanstack/react-query'
import { getProducts } from '@/http/api'
import SkeltonProduct from '../_components/skelton-product'

const SeeAllProductsPage = () => {
    const {data : products, isFetching} = useQuery({
        queryKey: ['see-all'],
        queryFn: getProducts,
    })
  return (
    <div className='pt-16 md:pt-24'>
   <div className='p-4 md:p-6 mt-6 md:mt-10'>
   <div className='flex gap-1.5 md:gap-2'>
    <h1 className='font-normal text-2xl md:text-4xl 2xl:text-5xl tracking-normal relative'>See all</h1>
      <div className='flex items-center justify-center'>
      <p className='text-xs md:text-base tracking-tighter'>369</p>
      </div>
    </div>
    <p className='max-w-[720px] text-sm md:text-xl my-3 md:my-6 xl:my-8'>Together in one place - find our entire selection of NN CLOTHING styles available, from our vast collection of trousers, outerwear and shirts to shorts.</p>
    <div className='w-full grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-1.5 mt-10 md:mt-20'>
      {
        products && products.length && !isFetching ? (
            products.concat(products).map((item,i) => <ProductCard product={item} key={i}/>)
        ) : (
            Array.from({length: 4}).map((_,i) => <SkeltonProduct key={i}/>)
        )
      }
    </div>
    <div>
        ssss
    </div>
   </div>
      </div>
  )
}

export default SeeAllProductsPage