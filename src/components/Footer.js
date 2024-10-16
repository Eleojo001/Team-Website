import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
    const options = [
        { label: 'About us', href: '/about' },
        { label: 'News', href: '#' },
        { label: 'Schedule', href: '#' },
        { label: 'Contact', href: '#' },
        // { label: 'Podcast', href: '#' }
      ];
      const currentYear = new Date().getFullYear();
  return (
    <div className='footerholder'>
        <div className="footerContainer">
        <div className="ContactLogo"> 
        <h3>Address</h3>
           <p>
           Plateau Jets SC <br />
           info@plateaujetsSC.com <br />
           08151553780
           </p>
        </div>
            <div className="mediaplatforms">
            <h3>Social Media Platforms</h3>
                <ul>
                    <li>
                    <a href="#">
                    <FaFacebook style={{color:'blue'}} /> Facebook
                    </a>
                    </li>
                    <li>
                    <a href="#">
                    <IoLogoWhatsapp style={{color:"green"}} /> Whatsapp
                        
                    </a>
                    </li>
                    <li>
                        <a href="#">
                        <BsTwitterX /> Twitter
                        </a>
                    </li>

                </ul>
            </div>
            <div className="footerNav">
            <h3>Navigations</h3>
            <ul>
        {
          options.map((items, index)=>(
            <li key={index}>
            <a href={items.href}>{items.label}</a>
            </li>
          ))
        }
        </ul>
            </div>
            
        </div>
            <p className='copyrights'> &copy; {currentYear}. All right resevered. Designed by JomiahCreations</p>
    </div>
  )
}

export default Footer