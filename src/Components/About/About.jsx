import React from 'react'
import './about.css'
import about_img from '../../assets/about.png' 
import play_icon from '../../assets/play-icon.png' 
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className='about-left'>
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_icon} alt="" className='play-icon'  onClick={()=>{
              setPlayState(true)
            }}/>
        </div>
        <div className='about-right'>
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sinsectetur adipisicing elit. Inventore minus at quos fugit, quod voluptates deleniti iusto autem eos perferendis ipsa ratione, temporibus illo saepe velit, aliquam ut laboriosam aspernatur.nulla deserunt voluptates optio ducimus <br /> <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quisquam, ab ratione tenetur est totam minus perspiciatis illum neque fugit? Distinctio fuga repellendus nihil quae quas quis consequuntur consectetur saepe. <br /> <br /> impedit eligendi distinctio quisquam nisi officiis accusamus. Aspernatur, omnis aperiam? Beatae.adipisicing elit. Ipsa quos dolorem velit molestias dolor praesentium voluptatibus! Fugiat fuga, maxime autem temporibus corporis optio tempore praesentium soluta nisi totam illum aperiam.</p>
        </div>
    </div>
  )
}

export default About