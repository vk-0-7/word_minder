import axios from "axios";
import React, { useState, useEffect } from "react";
import "./AddAntonyms.css";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";

const AddAntonyms = ({ user }) => {
  const navigate = useNavigate();
  const [dictionary, setDictionary] = useState({
    word: "",
    antonym: "",
    email: user.email,
  });

  const [suggestAntonyms,setSuggestAntonyms]=useState([]);
  const [antData, setAntData] = useState([]);
  // const[antData2,setAntData2] =useState([])

  const addword = (e) => {
    const { name, value } = e.target;
    setDictionary({
      ...dictionary,
      [name]: value,
    });
  };






  //   var email=user.email
  const addAntonym = () => {
    const { word, antonym, email } = dictionary;
    if (word && antonym && email) {
      axios.post(`${BASE_URL}addantonyms`, dictionary).then(() => {
        setAntData([...antData, { word, antonym, email }]);
      });
    } else {
      alert("Invalid Input");
    }
  };
  const getAntonyms = () => {
    axios.get(`${BASE_URL}getantonyms`).then((response) => {
      const data = response.data;
      setAntData(data);
      console.log(data);
    });
  };


  const handleWord=async()=>{
    console.log(dictionary.word);
    try {
      const res= await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${dictionary.word}`,{ headers:{'X-Api-Key': 'Ls6+vwGvnl/jKMWYGnBQhw==hTeGUXQKdNEMFffu'}},{contentType: 'application/json'})
      // const response= await res.json();
      console.log(res.data.antonyms);
      setSuggestAntonyms(res.data.antonyms);


    } catch (error) {
      console.log("error while calling api",error.message)
    }
  }

  useEffect(() => {
    getAntonyms();
  }, []);


  const addSuggestedAntonym=(e)=>{

    const { name, value } = e.target;
    setDictionary({
      ...dictionary,
      [name]: value,
    });

  }

  return (
    <>
      {/* { console.log(user.email)} */}
      <div class=" col justify-content-center d-flex  ">
        <div className="input">
          <input
            type="text"
            placeholder="eg. Fat"
            name="word"
            value={dictionary.word}
            onChange={addword}
          />
          <button  className='suggest_btn'style={{width:"8rem",fontSize:"1rem"}} onClick={handleWord}>Find antonyms</button>
          <input
            type="text"
            placeholder="Thin"
            name="antonym"
            value={dictionary.antonym}
            onChange={addword}
          />
        </div>

        <button type="button" onClick={addAntonym}>
          Add
        </button>
      </div>

     
     <div className="suggest">
      {
        suggestAntonyms.map((val,index)=>{
           return(<>
        
            <button value={val} id='item' name='antonym' onClick={(e)=>addSuggestedAntonym(e)}> {val} </button><br />
            </>
           )
        

        })
      } </div> 
      

      <div className="table">
        <table>
          <tr>
            <th>word</th>
            <th>Antonyms</th>
          </tr>

          {antData.map((element, index) => {
            if (element.email === dictionary.email) {
              return (
                <>
                  <tr>
                    <td>{element.word}</td>
                    <td>{element.antonym}</td>
                  </tr>
                </>
              );
            }
          })}
        </table>
      </div>
    </>
  );
};

export default AddAntonyms;
