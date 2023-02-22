import React from 'react'
import DownloadAds from './DownloadAds';
import './Hero.css'
import background from '../img/backgraphics.png'
import p1 from '../img/p 1.png'
import p2 from '../img/p 2.png'
import p3 from '../img/p 3.png'
import p4 from '../img/p 4.png'


function Hero() {
  return (
    <div className="wrapper">
        {/* left side */}
        <div className="headings">
            <span>Experience  The </span>
            <span>
                <b>Best Quality Music  </b>
            </span>
            <span className='textside'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                <br />
                omnis temporibus iusto asperiores laudantium explicabo id.
            </span>
            <div>
                <span className='spandownload'>Download now on IOS and Android</span>
                <DownloadAds/>
            </div>
        </div>

        {/* right side */}
        <div className="images">
            <img src={background} alt=""  className='backimage'/>
            <img src={p1} alt="" className='image1'/>
            <img src={p2} alt="" className='image2'/>
            <img src={p3} alt="" className='image3'/>
            <img src={p4} alt="" className='image4'/>
        </div>
    </div>
  )
}

export default Hero;  