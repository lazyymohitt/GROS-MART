import React from 'react'
import Button from './Button'
import image from '../assets/Hero.png'

const Hero = () => {
  return (
    <section className='relative bg-green-500 text-white  md:mt-15'>
      <div className='max-w-5xl mx-auto py-16 flex flex-col md:flex-row  items-center px-6 md:px-0 gap-15'>
        <div className='md:w-1/2 mb-8 md:mb-0'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4 '>
            Fresh
            <span className='text-orange-400'>
              Groceries 
            </span>
            Delivered to Your Road
          </h1>
          <p className='text-lg  mb-6'>
            Shop from our wide selection of fresh produce, pantry staples, and household essentials, all delivered straight to your doorstep with ease and convenience !!
          </p>
          <div className='flex flex-wrap gap-4'>
            <Button id="Shop Now" title="Shop Now" containerClass="font-semibold text-green-600 bg-white hover:bg-gray-100" rightIcon= <i className="ri-store-3-line pl-2"></i> />
            <Button id="Learn More" title="Learn More" containerClass="font-semibold bg-green-700" />
          </div>
        </div>
        <div className='relative flex justify-center '>
      <div className='absolute inset-0 bg-white/20 rounded-lg backdrop-blur-md'>
      </div>
      <img src={image} className='z-10 ml-8 w-90' alt="" />

        </div>
      </div>
    </section>
  )
}

export default Hero