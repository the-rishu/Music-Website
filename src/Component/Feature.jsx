import React from 'react'
import './Feature.css'


const Feature = (props) => {
  return (
    <div className="feature">
        <div className="icon">
            <img src={require(`../img/${props.icon}.png`)} alt="" />
        </div>
        <span className='featuretext'>{props.title}</span>

         <span className='featuretext1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta itaque obcaecati quo cum sit quod ullam dolorem ex.Music 
         </span>
        <span className='featuretext2'>Learn More</span> 
    </div>
  )
}

export default Feature
