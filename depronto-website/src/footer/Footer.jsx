import React from 'react';
import "./Footer.css";
export default function Footer() {
  return (
    <div className='footer'>
    <div className="footerLeft">
        apartment therapy<br/><br/>
        Follow us<br/>
        <i class="fa-brands fa-square-facebook"></i>
<i class="fa-brands fa-square-instagram"></i>
<i class="fa-brands fa-twitter"></i>
<i class="fa-brands fa-square-pinterest"></i><br/><br/>
Got a tip, kitchen tour, or other story our readers should see?<br/><br/>
<button>Tell us about it!</button><br/><br/><br/>
<span>Apartment Therapy is © 1994-2022 Apartment Therapy, LLC</span>
    </div>
    <div className="footerCenter">
        <b>READ</b>
        <ul className="center-list">
            <li><a href="#">House Tours</a></li>
            <li><a href="#">Style</a></li>
            <li><a href="#">How To</a></li>
            <li><a href="#">Organize & Clean</a></li>
            <li><a href="#">Living</a></li>
            <li><a href="#">Shop</a></li>
        </ul>
    </div>
    <div className="footerRight">
       <b>COMPANY</b> 
    <ul className="center-list">
            <li><a href="#">Partner with Us</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">EU and California Data Subject Requests</a></li>
            <li><a href="#">Our Team</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Site map</a></li>
    </ul>
    </div>
    </div>
  )
}
