import React from 'react'
import Section1 from './home/Section1'
import Section2 from './home/Section2'
import '../assets/sass/Home.scss'



const Home = () => {
  return (
    <div className='home'>
      <section><Section1/></section>
      <section><Section2/></section>
      
    </div>
  )
}

export default Home