import React from 'react'
import TopSlider from '../components/TopSlider'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className='px-5 md:px-8 lg:px-20 py-10'>
       <TopSlider/>
       <Banner/>
    </div>
  )
}
