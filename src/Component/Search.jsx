import React from 'react'
import './Search.css'
import backgraphices from '../img/backgraphics.png'
import d1 from '../img/d1.png'
import d2 from '../img/d2.png'
import d3 from '../img/d3.png'
import d4 from '../img/d4.png' 
import searchi from '../img/search.png'
import Path from '../img/Path 318.png'
import MusicPlayer from '../Component/MusicPlayer'

const Search = () => {
  return (
    <div className="search">
        <div className="left">
            <img src={backgraphices} alt=""  className='simageb'/>
            <img src={d1} alt=""  className='simage1'/>
            <img src={d2} alt=""  className='simage2'/>
            <img src={d3} alt=""  className='simage3'/>
            <img src={d4} alt=""  className='simage4'/>
        </div>

        <div className="right">
          {/* search start */}
            <div className="searchbar">
              <input type="text" placeholder='Enter the Keyword or URL' className='input'/>
              <div className="searchicon">
                <img src={searchi} alt="" className='searchiconimage' />
              </div>
            </div>
            {/* searchbar end */}
            <div className="tild">
              <img src={Path} alt="" className='tildimage'/>
            </div>
            {/* Deatil */}
                  <div className="detail">
                    <span className='detailtext'>Search Music By</span>
                    <span  className='detailtext2'>
                      <b>
                        Name or Direct URL
                      </b>
                    </span>
                    <span className='detailtext3'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Dolores pariatur consequuntur officia consectetur<br/> animi culpa blanditiis quos laboriosam ab.
                    </span>
                  </div> 

              {/* Detail end */}

            {/* Music Player */}
            <MusicPlayer />
        </div>
        {/* right end */}
    </div>
  )
}

export default Search