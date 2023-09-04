import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
  return (
    <section className='pt-10 flex flex-col gap-3 px-8'>
        <h2 className='font-medium text-2xl'>Destacados</h2>
        <ProductCard/>
    </section>
  )
}

export default FeaturedProducts