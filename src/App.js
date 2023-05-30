import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import {BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Quizantonyms from "./Components/quiz/Quizantonyms";
import Quizsynonyms from "./Components/quiz/Quizsynonyms";
import Addantonyms from "./Components/Addword/AddAntonyms";
import Addsynonyms from "./Components/Addword/AddSynonyms";
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
  
  
  console.log(user);

  const getAntonyms = () => {
    axios.get(`${BASE_URL}getantonyms`).then((response) => {
      setAntData(response.data);
    });
  };

  useEffect(() => {
    getAntonyms();
  }, []);


  const getSynonyms=()=>{
    axios.get(`${BASE_URL}getsynonyms`)
       .then((response) =>{
         const data=response.data
         setSynData(data)
        //  console.log(data);
        })
    }
  
      useEffect(() =>{
       getSynonyms();
       
      },[])
  return (
    <>
      
      <Navbar user={user} setLoginUser={setLoginUser} />

      <Routes>
       
        <Route exact path="/" element={<Home/>}/>
          
          
        

        <Route exact path="/login" element={<Login setLoginUser={setLoginUser} />}/>
          
          
       
        <Route exact path="/register" element={<Register />} />
         

        <Route exact path="/quizsynonyms" element={user && user._id ? (
            <Quizsynonyms 
            user={user}
            synData={synData}
            setSynData={setSynData}
            QuestionCount={QuestionCount}
            setQuestionCount={setQuestionCount}
            synscore={synscore}
            setSynscore={setSynscore} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
          
       

        <Route exact path="/quizantonyms" element= {user && user._id ? (
            <Quizantonyms
              user={user}
              antData={antData}
              setAntData={setAntData}
              count={count}
              setCount={setCount}
              score={score}
              setScore={setScore}
             
            />
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
         

        <Route exact path="/addantonyms" element={true ? 
            <Addantonyms user={user}  />
           : 
            <Login setLoginUser={setLoginUser} />
          }/>
          
        


        <Route exact path="/addsynonyms" element={user && user._id ? (
            <Addsynonyms user={user} setLoginUser={setLoginUser} />
          ) : (
            <Login setLoginUser={setLoginUser} />
          )}/>
          
       
      </Routes>
    </>
  );
};

export default App;
