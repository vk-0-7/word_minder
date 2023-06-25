import React, { useState } from "react";
import './subscribe.css'
import {RxCross2} from 'react-icons/rx'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Api/api";

const base_url='http://localhost:9000/';
const Subscribe = ({setIsModalOpen}) => {
  
    const navigate=useNavigate();
  const [emailerror, setEmailError] = useState("");
  const [email,setEmail]=useState();
//   const [btnLoader, setBtnLoader] = useState(false);
//   const [color, setColor] = useState("#ffffff");



const handlechange=(e)=>{
     var{name,value}=e.target;
     value=value.toLowerCase();
     setEmail(value);
}

const handlesubscribe=(e)=>{
    // e.preventDefault();

    if(email){
        axios.post(`${BASE_URL}subscribe`,{email:email}).then((res) =>{
          console.log(res.data.message);
          setIsModalOpen(false)
        }).catch((err) => console.log(err)) 
       } 
       else{ 
        alert("Invalid Input");
       }
}

//   const handlechange = (e) => {
//     var { name, value } = e.target;
//     value = value.toLowerCase();
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };
//   const getaccess = async (e) => {
//     e.preventDefault();
//     // const { name, email } = user;

//     if (email.trim() === "") {
//       setEmailError("Email is required.");
//     } else if (name.trim() === "") {
//       setEmailError("Name is required.");
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       setEmailError("Please enter valid email address");
//     } else {
//       setEmailError("");
    //   setBtnLoader(true);
    //   try {
    //     const res = await axios.post(
    //       "https://backend.discoverinfluencer.in/user/request-for-access",
    //       user
    //     );
    //     setShowWaitlist(false);
    //     console.log(res.data.message);
    //     setShowJoinInsta(true);
    //     setBtnLoader(false);
    //   } catch (error) {
    //     console.log("error occured", error.message);
    //     setShowWaitlist(false);
    //     setShowCheckNoAccess(true);
    //     setBtnLoader(false);
    //   }
    
//   };

  const handlecross = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        height: "100vh",
        width: "100vw",
        top: "0",
        left: "0",
        zIndex: "1000",
        backgroundColor: "rgba(0,0,0,0.3)",
      }}
    >
      <div
        className='main_page'
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RxCross2
        
          onClick={() => handlecross()}
          className='cross'
        />
        <div className='main_body'>
          {" "}
          <h2>
            {" "}
            subscribe here to get <br />
            daily words and a weekly quiz
          </h2>
         
          <br />
          <input
            type="text"
            name="email"
            placeholder="enter your email address"
            value={email}
            onChange={handlechange}
          />
          {true && (
            <div id="msg" className='note'>
              {" "}
              <p>{emailerror}</p>{" "}
            </div>
          )}
          <button className='subscribe_btn'onClick={handlesubscribe} >
           
              <span> Subscribe</span>
            
          </button>{" "}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
