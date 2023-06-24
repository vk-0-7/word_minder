import axios from "axios";
import React, { useState, useEffect } from "react";
import "./adminAntonyms.css";
import { useNavigate } from "react-router-dom";

import Dashboard from "./Dashboard";
import {MdOutlineDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'
import { BASE_URL } from "../../Api/api";

const AddAntonyms = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    word: "",
    antonym: "",
    
  });

  const [suggestAntonyms,setSuggestAntonyms]=useState([]);
  const [antData, setAntData] = useState([]);
  // const[antData2,setAntData2] =useState([])

  const addword = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };






  //   var email=user.email
  const addAntonym = () => {
    const { word, antonym } = inputData;
    if (word && antonym ) {
      axios.post(`${BASE_URL}addallantonyms`, inputData).then((res) => {
        console.log(res.data)
        // setAntData([...antData, { word, antonym }]);
      });
    } else {
      alert("Invalid Input");
    }
  };

useEffect(() => {
   
        axios.get(`${BASE_URL}getallantonyms`).then((response) => {
          const data = response.data;
          setAntData(data);
          console.log(data);
        }).catch((err)=>console.log('error caught',err))
      
}, [])

 
    console.log(antData);

//   const handleWord=async()=>{
//     console.log(dictionary.word);
//     try {
//       const res= await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${dictionary.word}`,{ headers:{'X-Api-Key': 'Ls6+vwGvnl/jKMWYGnBQhw==hTeGUXQKdNEMFffu'}},{contentType: 'application/json'})
//       // const response= await res.json();
//       console.log(res.data.antonyms);
//       setSuggestAntonyms(res.data.antonyms);


//     } catch (error) {
//       console.log("error while calling api",error.message)
//     }
//   }

//   useEffect(() => {
//     getAntonyms();
//   }, []);


//   const addSuggestedAntonym=(e)=>{

//     const { name, value } = e.target;
//     setDictionary({
//       ...dictionary,
//       [name]: value,
//     });

//   }

  return (
    <>
 {console.log(antData)}
     <Dashboard/>
      {/* { console.log(user.email)} */}
      <div class=" col justify-content-center d-flex  ">
        <div className="input">
          <input
            type="text"
            placeholder="eg. Fat"
            name="word"
            value={inputData.word}
            onChange={addword}
          />
          {/* <button style={{width:"8rem",fontSize:"1rem"}} >Find antonyms</button> */}
          <input
            type="text"
            placeholder="Thin"
            name="antonym"
            value={inputData.antonym}
            onChange={addword}
          />
        </div>

        <button type="button" onClick={addAntonym} >
          Add
        </button>
      </div>

     
     {/* <div className="suggest">{
        suggestAntonyms.map((val,index)=>{
           return(<>
        
            <button value={val} id='item' name='antonym' onClick={(e)=>addSuggestedAntonym(e)}> {val} </button><br />
            </>
           )
        

        })
      } </div>  */}
      

      <div className="new_table">
        <div className="table_heading">
            <h3>Word</h3>
            <h3>Antonym</h3>
        </div>
        <div className="table_body">
          
            {    
                antData?.map((data,index)=>{
                  return(

                    <span key={index}>
                        
             <div className="table_content">
               <p>{data.word}</p>
               <p>{data.antonym}</p>
              </div>
             <div className="table_icons">
                {/* <FaEdit/> */}
                <MdOutlineDelete/>
            </div>
            </span>
                  )
                })
            }
           
          
        </div>
      </div>
    </>
  );
};

export default AddAntonyms;
