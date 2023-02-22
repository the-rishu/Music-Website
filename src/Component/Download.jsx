import React from 'react'
import './Download.css'
import DownloadAds from './DownloadAds'
import path from '../img/Path 318.png'


const Download = () => {
  return (
    <div className="downloads">
        <img src={path} alt="" />
                    <div className="headlinedown">
                        <span className='text1'>Download The Best Music</span>
                        <span className='text2'>
                            <b>
                                App Now !
                            </b>
                        </span>
                        <span className='text3'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing <br /> Dolor recusandae unde explicabo illo, aliquam iure soluta doloremque incidunt nesciunt ipsum.
                        </span>
                    </div>
        {/* headline end */}
                     {/* Download add */}
                    <div className='down'>
                    <DownloadAds/>
                    </div>

    </div>
  )
}

export default Download