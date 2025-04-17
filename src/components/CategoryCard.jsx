import React from 'react'

const CategoryCard = ({image, name}) => {
  return (
    <div className='overflow-hidden transition-all ease-linear  hover:shadow-2xl border border-gray-200 rounded-xl'>
        <div className=''>
        <div className='aspect-square relative bg-gray-200'>
            <img src={image} className='object-cover w-full h-full' alt={image} />
        </div>
        <div className='p-2 text-center'>
                <h3 className='font-medium tracking-wide'>{name}</h3>
        </div>
        </div>
    </div>
  )
}

export default CategoryCard