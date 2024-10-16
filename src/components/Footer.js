import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

function Footer() {
  return (
    <div>
        <div className="footerContainer">
        <div className="ContactLogo"> 
            <h3>Address</h3>
           <p>
           Plateau Jets SC <br />
           info@plateaujetsSC.com <br />
           08151553780
           </p>
                <h3>Social Media Platforms</h3>
                <ul>
                    <li>
                    <a href="#">
                    <FaFacebook style={{color:'blue'}} /> Facenook
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
            <p> &copy;2024 All right resevered. Designed by JomiahCreations</p>
            
        </div>
    </div>
  )
}

export default Footer