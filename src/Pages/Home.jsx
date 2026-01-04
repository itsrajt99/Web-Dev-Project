import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import BestSeller from '../Components/BestSeller'
import NewsLetter from '../Components/NewsLetter'
import BottomBanner from '../Components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-8'>
      <Hero/>
      <Category/>
      <BestSeller/>
      <NewsLetter/>
      <BottomBanner/>
    </div>
  )
}

export default Home
