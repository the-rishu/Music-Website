import React from 'react'
import './Footer.css'
import FooterMenu from './FooterMenu'
import facebook from '../img/facebook.svg'
import twitter from '../img/twitter.svg'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
const Footer = () => {
  return (
   <div className="footer">
            <FooterMenu/>
            <div className="icons">
              <ul className='unlist'>
              <li className="iconlist"><img src={facebook} alt="" /></li>
              <li className="iconlist"><img src={linkedin} alt="" /></li>
              <li className="iconlist"><img src={instagram} alt="" /></li>
              <li className="iconlist"><img src={twitter} alt="" /></li>
              </ul>
            </div>

          <span className='ftext'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente enim totam error iste reiciendis fugit.
          </span>
   </div>
  )
}

export default Footer 