import React from 'react'
import mask from '../img/Mask Group 23.png'
import path from '../img/path.png'
import './MusicPlayer.css'
import Group9 from '../img/Group 9.png'

 const MusicPlayer = () => {
  return (
    <div className="musicPlayer">
        <div className="upperPart">
            <div className="profile">
                <img src={mask} alt="" />
                <div className="detailssf">
                    <span className='detailssftext1'>Arjit Singh</span><br />
                    <span className='detailssftext2'>Gem Artist</span>
                </div>
                {/* detailssf end */}
            </div>
            {/* profile end */}
            <div className='pathdiv'>
                <img src={path} alt="" />
            </div>
        </div>
        {/* upper end */}

        <div className="lowerpart">
            <div className="track">
                <span>2:30</span>
                <img src={Group9} alt="" />
                <span>4:30</span>
            </div>

            {/* comtrol*/}
            <div className="controls"></div>
        </div>
    </div>
  )
}
  export default MusicPlayer;