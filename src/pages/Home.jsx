import React from 'react'
import TopSlider from '../components/TopSlider'
import Banner from '../components/Banner'
import DownloadApp from '../components/DownloadApp'

import HeroMenu from '../components/HeroMenu'
import Trending from '../components/Trending'
import ShowMenu from '../components/ShowMenu'

export default function Home() {
  return (
    <div className='px-5 md:px-8 lg:px-20 py-10'>
       <TopSlider/>
       <Banner/>
       <HeroMenu/>
       <DownloadApp/>
       <Trending/>
       <ShowMenu/>
    </div>
  )
}
