import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Dashboard from "./Components/Admin/Dashboard";
import AdminAntonyms from '../src/Components/Admin/adminAntonyms'
import AdminSynonyms from '../src/Components/Admin/adminSynonyms'
import Login from "./Components/Login";
import Register from "./Components/Register";
import Quizwords from "./Components/quiz/Quizwords";
import Quizsynonyms from "./Components/quiz/Quizsynonyms";
import Addwords from "./Components/Addword/Addwords";
// import Addsynonyms from "./Components/Addword/AddSynonyms";
import Result from "./Components/quiz/Result";
import Resultsyno from "./Components/quiz/Resultsyno";
import { BASE_URL } from "./Api/api";





const App = () => {
  const [user, setLoginUser] = useState({});
  const [count, setCount] = useState(1);
  const [QuestionCount, setQuestionCount] = useState(1)
  const [antData, setAntData] = useState([]);
  const [synData, setSynData] = useState([]);
  const [synscore, setSynscore] = useState(0);
  const [score, setScore] = useState(0);
  
  
  // console.log(user);

  // const getAntonyms = () => {
  //   axios.get(`${BASE_URL}getantonyms`).then((response) => {
  //     setAntData(response.data);
  //   });
  // };

  // useEffect(() => {
  //   getAntonyms();
  // }, []);


  // const getSynonyms=()=>{
  //   axios.get(`${BASE_URL}getsynonyms`)
  //      .then((response) =>{
  //        const data=response.data
  //        setSynData(data)
  //       //  console.log(data);
  //       })
  //   }
  
  //     useEffect(() =>{
  //      getSynonyms();
       
  //     },[])


  return (
    <>
      
      <Navbar user={user} setLoginUser={setLoginUser} />

      <Routes>
       
        <Route exact path="/" element={<Home/>}/>
          
          
        

        <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          
          
       
        <Route exact path="/register" element={<Register />} />
         

        {/* <Route exact path="/quizsynonyms" element={user && user._id ? (
            <Quizsynonyms 
            user={user}
            // synData={synData}
            // setSynData={setSynData}
            QuestionCount={QuestionCount}
            setQuestionCount={setQuestionCount}
            synscore={synscore}
            setSynscore={setSynscore} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
           */}
       

        <Route exact path="/quizwords" element= {user && user._id ? (
            <Quizwords />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
         

        <Route exact path="/result" element= {user && user._id ? (
            <Result score={score}  count={count} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
         


        <Route exact path="/resultsyno" element={user && user._id ? (
            <Resultsyno synscore={synscore}  QuestionCount={QuestionCount} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
         

        <Route exact path="/addwords" element={user && user._id  ? 
            <Addwords user={user}  />
           : 
           <Addwords user={user}  />
            // <Login setLoginUser={setLoginUser} />
          }/>
          
        


        {/* <Route exact path="/addsynonyms" element={user && user._id ? (
            <Addsynonyms user={user} setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
           */}
          <Route exact path="/dashboard" element={<Dashboard/>}/>
          <Route exact path="/adminAntonyms" element={<AdminAntonyms/>}/>
          <Route exact path="/adminSynonyms" element={<AdminSynonyms/>}/>
      </Routes>
    </>
  );
};

export default App;
