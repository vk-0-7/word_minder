import axios from "axios";
import React, { useState, useEffect } from "react";
import "./adminSynonyms.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import Dashboard from "./Dashboard";
import {MdOutlineDelete} from 'react-icons/md'
import {FaEdit} from 'react-icons/fa'

const Addsynonyms = () => {
  const navigate = useNavigate();
  const [inputData, setInputData] = useState({
    word: "",
    synonym: "",
    
  });

  const [suggestsynonyms,setSuggestSynonyms]=useState([]);
  const [synData, setSynData] = useState([]);
  // const[antData2,setAntData2] =useState([])

  const addword = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };






  //   var email=user.email
  const addsynonym = () => {
    const { word, synonym } = inputData;
    if (word && synonym ) {
      axios.post(`${BASE_URL}addallsynonyms`, inputData).then((res) => {
        console.log(res.data)
        // setAntData([...antData, { word, synonym }]);
      });
    } else {
      alert("Invalid Input");
    }
  };

useEffect(() => {
   
        axios.get(`${BASE_URL}getallsynonyms`).then((response) => {
          const data = response.data;
          setSynData(data);
          console.log(data);
        }).catch((err)=>console.log('error caught',err))
      
}, [])

 
    console.log(synData);

//   const handleWord=async()=>{
//     console.log(dictionary.word);
//     try {
//       const res= await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${dictionary.word}`,{ headers:{'X-Api-Key': 'Ls6+vwGvnl/jKMWYGnBQhw==hTeGUXQKdNEMFffu'}},{contentType: 'application/json'})
//       // const response= await res.json();
//       console.log(res.data.synonyms);
//       setSuggestsynonyms(res.data.synonyms);


//     } catch (error) {
//       console.log("error while calling api",error.message)
//     }
//   }

//   useEffect(() => {
//     getsynonyms();
//   }, []);


//   const addSuggestedsynonym=(e)=>{

//     const { name, value } = e.target;
//     setDictionary({
//       ...dictionary,
//       [name]: value,
//     });

//   }

  return (
    <>
 {console.log(synData)}
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
          {/* <button style={{width:"8rem",fontSize:"1rem"}} >Find synonyms</button> */}
          <input
            type="text"
            placeholder="Thin"
            name="synonym"
            value={inputData.synonym}
            onChange={addword}
          />
        </div>

        <button type="button" onClick={addsynonym} >
          Add
        </button>
      </div>

     
     {/* <div className="suggest">{
        suggestsynonyms.map((val,index)=>{
           return(<>
        
            <button value={val} id='item' name='synonym' onClick={(e)=>addSuggestedsynonym(e)}> {val} </button><br />
            </>
           )
        

        })
      } </div>  */}
      

      <div className="new_table">
        <div className="table_heading">
            <h3>Word</h3>
            <h3>synonym</h3>
        </div>
        <div className="table_body">
          
            {    
                synData?.map((data,index)=>{
                  return(

                    <span key={index}>
                        
             <div className="table_content">
               <p>{data.word}</p>
               <p>{data.synonym}</p>
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

export default Addsynonyms;
