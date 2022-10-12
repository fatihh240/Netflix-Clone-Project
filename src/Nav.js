import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);
const navigate = useNavigate();

const transitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    } else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
}, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img 
        onClick={() => navigate(`/`)}
        className='nav__logo'
        src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
        alt=''
        />
        <img 
        onClick={() => navigate(`/profile`)}
        className='nav__avatar'
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/bf6e4a33850498.56ba69ac3064f.png"
        alt='Profile_image'
        />
        </div>
    </div>
  )
}

export default Nav;