import React, { useState } from 'react'
import "../styles/navbar.css";
function Navbar() {
    console.log("navbar rendered");
    const [showDropDown,setShowDropDown] = useState(false);
  return (
    <nav className='nav-bar'>
        <div  className='logo-div'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-check-icon lucide-package-check"><path d="m16 16 2 2 4-4"/><path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"/><path d="m7.5 4.27 9 5.15"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" x2="12" y1="22" y2="12"/></svg>
            <h1 className='logo-text'>Crate</h1>
        </div>
         <div className="profile-div" >
            <svg  onClick={() => setShowDropDown(prev => !prev)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
              <span className={`dropdown-container ${showDropDown ? "show" : ""}`}>
                 <h1>Hassam Kiani</h1>
                  <p>hassamkiani66@gmail.com</p>
                  <h3>Settings</h3>
                  <h3>Sign out</h3> 
                 </span>
          </div>    
    </nav>
  )
}

export default React.memo(Navbar);