import React, { useState } from "react";
import axios from'axios';
import { useNavigate } from "react-router-dom";
import './Register.css'
import { BASE_URL } from "../Api/api";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

const submit=()=>{
       const {username,name,email,password,confirmPassword}=user;
       if(username && name && email && password &&confirmPassword && password===confirmPassword){
        axios.post(`${BASE_URL}register`,user).then((res) =>{
          alert(res.data.message);
          navigate("/login");
        });
       } 
       else{
        alert("Invalid Input");
       }
} 

  return (
    <div className="register">
      {/* {console.log(user)} */}
      <div className="registerForm">
      <h1> Register</h1>
      <input
        type="text"
        placeholder="Choose a Username"
        className="username"
        name="username"
        value={user.username}
        onChange={handleChange}
      /> <br />
      <input
        type="text"
        placeholder="Your name"
        className="name"
        name="name"
        value={user.name}
        onChange={handleChange}
      />  <br />
      <input
        type="text"
        placeholder="Your Email"
        className="email"
        name="email"
        value={user.email}
        onChange={handleChange}
      />  <br />
      <input
        type="password"
        placeholder="password"
        className="password"
        name="password"
        value={user.password}
        onChange={handleChange}
      />  <br />
      <input
        type="password"
        placeholder="Confirm password"
        className="confirmPassword"
        name="confirmPassword"
        value={user.confirmPassword}
        onChange={handleChange}
      />  <br />

      <button className="registerBtn" onClick={submit}>Register</button>
      </div>
    </div>
  );
};

export default Register;
