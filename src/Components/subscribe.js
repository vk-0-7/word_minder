import React, { useState } from "react";
import './subscribe.css'
import { RxCross2 } from 'react-icons/rx'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import CircularProgress from '@mui/joy/CircularProgress';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BASE_URL, BASE__URL } from "../Api/api";
import AfterSubscribe from "./aftersubscribe";


const Subscribe = ({ setIsModalOpen, afterSubscribeModal, setAfterSubscribeModal }) => {

  const navigate = useNavigate();
  const [emailerror, setEmailError] = useState("");
  const [email, setEmail] = useState();
  const [isbtnLoading, setIsBtnLoading] = useState(false);

  //   const [btnLoader, setBtnLoader] = useState(false);
  //   const [color, setColor] = useState("#ffffff");



  const handlechange = (e) => {
    var { name, value } = e.target;
    value = value.toLowerCase();
    setEmail(value);
  }

  const handlesubscribe = (e) => {
    // e.preventDefault();
    setIsBtnLoading(true)
    if (email) {
      axios.post(`${BASE_URL}subscribe`, { email: email }).then((res) => {
        console.log(res.status);
        setIsBtnLoading(false)
        setIsModalOpen(false)
        setAfterSubscribeModal(true)
      }).catch((err) => { console.log(err)
        //  alert("already subscribed")
        toast.error("You are already Subscibed");
         setIsBtnLoading(false)
      })
    }
    else {
      setIsBtnLoading(false)
      toast.error("Enter Email First")
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
        zIndex: "900",
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
          <button className='subscribe_btn' onClick={handlesubscribe} >
            {isbtnLoading ? <CircularProgress size="sm" /> :
              <span> Subscribe</span>
            }
          </button>{" "}
        </div>
      </div>
      {afterSubscribeModal && <AfterSubscribe setAfterSubscribeModal={setAfterSubscribeModal} />}

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        theme="dark"
      />
    </div>
  );
};

export default Subscribe;
