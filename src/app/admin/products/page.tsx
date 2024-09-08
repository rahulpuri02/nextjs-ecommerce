import { Button } from '@/components/ui/button'
import React from 'react'

const ProductsPage = () => {
  return (
    <div className='flex items-center justify-between ml-4 md:ml-0'>
        <h3 className='text-2xl font-bold tracking-tight'>Products</h3>
        <Button size={'sm'}>Add Product</Button>
    </div>
  )
}

export default ProductsPage