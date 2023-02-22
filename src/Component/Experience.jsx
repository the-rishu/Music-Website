import React from 'react'
import path from '../img/Path 318.png'
import './Experience.css'
import Feature from './Feature'


const Experience = () => {
  return (
    <div className="experience-section">
        {/* titld icon */}
        <img src={path} alt=""  className='titld'/>
        <div className="headline">
            <span>An Amazing App Can Change Your Daily Life</span>
            <span>
                <b>Music Experience</b>
            </span>
        </div>

        {/* feature section */}
         <div className="featuree">
            <Feature icon="Group 2" title='For Live Music'/>
            <Feature icon="music icon" title='For Daily Music'/>
            <Feature icon="Group 4" title='For Artist'/>
        </div> 
    </div>
  )
}

export default Experience;