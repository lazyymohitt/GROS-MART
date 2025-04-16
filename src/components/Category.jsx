import React from 'react'
import CategoryCard from './CategoryCard'

  const categoryItems = [
    {
      name:"Fruits",
      image: Fruits
    },
    {
      name:"Vegetables",
      image:vegetables
    }
  ,  {
    name:"Beverages",
    image:beverages
  },{
    name:"Bakery",
    image:bakery,

  },{
    name:"Dairy",
    image:dairy
  },{
    name:"Meat"
  ,
  image:meat
  }]

const Category = () => {
  return (
    <section className='py-12 bg-gray-50 px-6 md:px-0'>
    <div className='max-w-6xl mx-auto '>
    <h2 className='text-3xl font-semibold text-center mb-8'>
 Shop By Category 
    </h2>
 <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
{
categoryItems.map((item,index)=>{
return <CategoryCard
name={item.name} key={index}  image={item.image}/>
})
}
 </div>
    </div>

    </section>
  )
}

export default Category