import React from 'react'
import './hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better education for a better world</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia esse atque magnam. Ipsam quos culpa, vel magni, facilis, harum ullam quo tempora incidunt dolore minus possimus veritatis nisi accusamus animi?</p>
        <button className='btn'>Explore more <img src={dark_arrow}  alt="" /></button>
      </div> 
    </div>
  )
}

export default Hero