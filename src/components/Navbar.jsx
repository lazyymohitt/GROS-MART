import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='mx-auto bg-green-200 flex items-center justify-between px-6 py-5 fixed top-0 z-20 w-full borde-gray-100 shadow-xl lg:px-[180px] '>
        {/* here is the logo */}
            <h1 className='font-[monospace]'>GrossMartt.</h1>
        {/* here is the Nav options section */}
        <nav className='flex gap-5'>
         <div className='text-sm font-semibold md:flex items-center gap-7 hidden'>
            <h4>Home</h4>
            <h4>Shop</h4>
            <h4>About</h4>
            <h4>Contacts</h4>
         </div>
         <i className="ri-shopping-cart-line"></i>
        </nav>
        </div>
    </div>
  )
}

export default Navbar