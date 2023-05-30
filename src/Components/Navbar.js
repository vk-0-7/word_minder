import React, { useRef } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faBars,faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../image/logo12.png";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = ({ user, setLoginUser }) => {

const navRef=useRef();


const showNavBar=() =>{
    navRef.current.classList.toggle('responsive_Nav')
}





  return (
    <>
      {/* {console.log(user)} */}
      <nav className="navbar">
        <div className="leftNav">
          <img className="logo" src={logo} alt="logo not found" />
          <a href="/" className="reviser">
            <p> Reviser </p>{" "}
          </a>
        </div>

       
        <div className="dropdownButton">
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Take a Quiz
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link class="dropdown-item " to="/quizAntonyms">
                  Antonyms
                </Link>
              
                <Link class="dropdown-item" to="/quizSynonyms">
                  Synonyms
                </Link>
  </div>
</div>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  Add a Word
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
  <Link class="dropdown-item " to="/AddAntonyms">
                  Antonyms
                </Link>
              
                <Link class="dropdown-item" to="/AddSynonyms">
                  Synonyms
                </Link>
  </div>
</div>
         
</div>
    
   <navbar className="nav_nav" ref={navRef}>

        
          <ul className="navbarList"  onClick={showNavBar} >
            <Link to="/">
              <li> Home </li>
            </Link>
            <a href="#Courses">
              <li> Courses </li>
            </a>
            <a href="#Contact">
              <li> Contact </li>
            </a>
          </ul>
        
        
          {!user._id ? (
            <div className="auth_button"  onClick={showNavBar} >
              <Link id="beforeLogin" to="/login">
                {" "}
                Log In{" "}
              </Link>

              <Link id="beforeLogin" to="/register">
                {" "}
                Register
              </Link>
            </div>
          ) : (
            <div className="username_logout">
              {" "}
              <p id="afterLogin"> Hello {user.username} </p>
              <button
                id="afterLogin"
                className="logoutButton"
                onClick={() => setLoginUser({})}
              >
                {" "}
                logout
              </button>
            </div>
          )}
       
       

        
        

        <button className="cancel_icon icons" onClick={showNavBar} >
          <FontAwesomeIcon className="mobile_icon" icon={faXmark}  >
            {" "}
          </FontAwesomeIcon>
        </button>
        
        </navbar>
        <button className="menu_icon icons " >
          <FontAwesomeIcon className="mobile_icon" icon={faBars} onClick={showNavBar}>
            {" "}
          </FontAwesomeIcon>
         </button>
      </nav>
    </>
  );
};

export default Navbar;
