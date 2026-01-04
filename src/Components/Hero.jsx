import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='relative mt-14'>
      <img src={assets.main_banner_bg} alt="" className='hidden md:block w-full'/>
      <img src={assets.main_banner_bg_sm} alt="" className='md:hidden w-full opacity-30' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end
      md:justify-center pb-24 md:pb-0 md:pl-18 lg:pl-24'>
      <h1 className='text-3xl md:text-4xl font-bold text-center md:text-left max-w-72
      leading-tight lg:leading-15 md:max-w-72'>
        Freshness You Can Trust, Savings You Will Love!
      </h1>
      <div className='flex items-center mt-6 font-medium gap-6'>
        <Link to="/products" className='flex group items-center gap-2 px-7 
        rounded text-white py-3 bg-primary'>SHOP NOW
        <img src={assets.white_arrow_icon} alt="" className='
        md:hidden transistion group-focus:translate-x-1' /></Link>
         <Link to="/products" className='hidden md:flex group items-center gap-2 px-7 
        rounded text-white py-3 bg-primary'>EXPLORE DEAL'S
        <img src={assets.white_arrow_icon} alt="" className='
        md:hidden transistion group-focus:translate-x-1' /></Link>
      </div>
      </div>
    </div>
  )
}

export default Hero;
