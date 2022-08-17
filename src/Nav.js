import React, {  useEffect, useState } from 'react'
import './Nav.css'


function Nav() {
    //const [show , handleShow] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll" , ()=>{
    //         if(window.scrollY > 100) {
    //             handleShow(true);
    //         } else handleShow(false);
    //     });
    //     return () => {
    //         window.removeEventListener("scroll");
    //     };
    // },[]);

    // {`nav ${show && "nav_black"}`}

  return (
    <div className="nav" >
        <img 
            className='nav_logo'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/6/69/20220504140801%21Netflix_logo.svg/120px-Netflix_logo.svg.png" 
            alt="Netflix Logo" 
        />

         <img
            className='nav_avatar'
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
           />
    </div>
  )
}

export default Nav