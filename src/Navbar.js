import React, { useEffect, useState } from 'react'
import avatar from './avatar.png'
import './Navbar.css'


function Navbar() {

    const [show,handleShow] = useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if (window.scrollY > 100){
                handleShow(true)
            }else handleShow(false)
        })
        return ()=>{
            window.removeEventListener("scroll")
        }   
     },[])

    return (
      <div className={`nav ${show && "nav_black"}`}>
        <img
          className="nav_logo"
          src="https://cdn.freelogovectors.net/wp-content/uploads/2017/04/netflix-logo-500x134.png"
          alt="Netflix Logo"
        ></img>

        <img
          className="nav_avatar"
          src={avatar}
          alt="Avatar logo"
        ></img>
      </div>
    );
}

export default Navbar
