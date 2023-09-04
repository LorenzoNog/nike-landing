import React, { useState } from 'react'
import {AiOutlineLeft,AiOutlineRight} from 'react-icons/ai'


const slides = [
    {
        url:'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/46d04dbf-8b28-457e-9963-de2fdaae9777___f7eff94f03f09dd4f1d5656e87006656.png'
    },
    {
        url:'https://nikearprod.vtexassets.com/assets/vtex.file-manager-graphql/images/d6beee0f-7e23-46cb-bf9c-3a1a925baa79___2aa15799e3b0e2d3333ee8b2ae052d9d.png'
    }
]

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }
    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }


  return (
    <div className='bg-[#f5f5f5] max-w-[1400px] h-[70px] w-full py-7 px-5 relative flex justify-center '>
        <div className='cursor-pointer text-gray-500 text-lg translate-x-[5%] translate-y-[35%]' onClick={prevSlide}>
            <AiOutlineLeft/>
        </div>
        <div style={{backgroundImage:`url(${slides[currentIndex].url})`, transform:`translateX(-${currentIndex}%)`}} className='w-[50%] h-[30px] bg-center bg-cover transition-transform ease-out duration-1000'/>
        <div className='cursor-pointer text-gray-500 text-lg translate-x-[5%] translate-y-[35%]' onClick={nextSlide}>
            <AiOutlineRight/>
        </div>
    </div>
  )
}

export default Slider