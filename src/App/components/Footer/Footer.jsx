import React, { useState } from 'react'
import style from './Footer.module.css'

function Footer() {
  const [myValue, setMyValue] = useState('');
  return (
    
    <div className={style.wrapper} >
        <div className={style.container} >
        <a href="">Questions? Contact us.</a>
        <div className={style.ulContainer} >
              <ul>
                <li>FAQ</li>
                <li>Investor </li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>

               <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Preferences</li>
                <li>Legal Notices</li>
            </ul>

               <ul>
                <li>Account</li>
                <li>Ways to Watch</li>
                <li>Information</li>
                <li>Only on Netflix</li>
            </ul>

               <ul style={{position : 'relative' , right: '35px'}} >
                <li>Media Center</li>
                <li>Terms of Use</li>
                <li>Contact Us</li>
                <li>About us</li>
            </ul>
            </div>
           <i class="fa-solid fa-globe"></i>
          <select
            onChange={(e) => setMyValue(e.target.value)}
            defaultValue={myValue}>
            <option>English</option>
            <option>Russian</option>
          </select>
          <p>Netflix Uzbekistan</p>
        </div>
        
    </div>
  )
}

export default Footer