import React from 'react'
import "./topbar.scss";
import {Phone,Mail, LinkedIn, GitHub} from "@material-ui/icons" 
function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
          <div className="wrapper">
              <div className="left">
                  <a href="#intro" className="logo" >Portfolio</a>
                  <div className="itemContainer">
                  <Phone className="icon" />
                  <span><a href="tel:416-890-4719">Phone</a></span>
                  </div>
                  <div className="itemContainer">
                  <Mail className="icon"/>
                  <span><a href="mailto:arezoosohrabvand@gmail.com">Email</a></span>
                  </div>
                  <div className="itemContainer">
                  <LinkedIn className="icon"/>
                  <span ><a href="https://www.linkedin.com/in/arezou-sohrabvand/" >Linkdin</a></span>
                  </div>
                  <div className="itemContainer">
                  <GitHub className="icon"/>
                  <span><a href="https://github.com/arezousohrabvand">Github</a></span>
                  </div>
                  
              </div>
              <div className="right">
                  <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                      <span className="line1"></span>
                      <span className="line2"></span>
                      <span className="line3"></span>
                  </div>
              </div>
          </div>
        </div>
    )
}

export default Topbar
