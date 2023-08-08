import React, { useRef } from "react";
// import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import logo from "../image/logo12.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';




const Navbar = ({ user, setLoginUser }) => {
  console.log(user)
  const navRef = useRef();
  const navigate = useNavigate();

  const showNavBar = () => {
    navRef.current.classList.toggle('responsive_Nav')
  }

  return (
    <>
      {/* {console.log(user)} */}
      <nav className="navbar">
        <div className="leftNav">
          <img className="logo" src={logo} alt="logo not found" />
          <a href="/" className="reviser">
            <p> WordMinder </p>{" "}
          </a>
        </div>


        <div className='main_dropdown'>

          <div className="dropdown">
            <button className="dropdown_btn">Add Words</button>
            <div className="list_items">
              <Link to={'/AddAntonyms'}><p> Antonyms</p></Link>
              <Link to={'/AddSynonyms'}><p> Synonyms</p></Link>
            </div>
          </div>
          <div className="dropdown">
            <button className="dropdown_btn">Take a Quiz</button>
            <div className="list_items">
              <Link to={'/quizAntonyms'}><p> Antonyms</p></Link>
              <Link to={'/quizSynonyms'}><p> Synonyms</p></Link>
            </div>
          </div>

        </div>


        <navbar className="nav_nav" ref={navRef}>


          <ul className="navbarList" onClick={showNavBar} >
            <Link to="/">
              <li> Home </li>
            </Link>
            <a href="#Courses">
              <li> Reviews </li>
            </a>
            <a href="#Contact">
              <li> Contact </li>
            </a>
          </ul>


          {!user._id ? (
            <div className="auth_button" onClick={showNavBar} >
              <Link id="beforeLogin" to="/login">
                {" "}
                Log In {" "}
              </Link>

              <Link id="beforeLogin" to="/register">
                {" "}
                Register
              </Link>
            </div>
          ) : (
            <div className="username_logout">
              {" "}
              {(user.email != 'admin123@gmail.com' && user.password != 'admin123') ? <p id="afterLogin"> Hello {user.username} </p> :
                <button className="dashboard" onClick={() => navigate('/dashboard')} >Dashboard</button>}
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
