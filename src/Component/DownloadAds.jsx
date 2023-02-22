import React from 'react'
import AppStore from '../img/App Store.png'
import Googleplay from '../img/Google Play.png'
import './DownloadAds.css'

const DownloadAds = () => {
  return (
    <div className='download'>
        <div className="download_images">
            <img src={AppStore} alt=""  className='dimages'/>
            <img src={Googleplay} alt="" className='dimages' />
        </div>
    </div>
  )
}

export default DownloadAds;
