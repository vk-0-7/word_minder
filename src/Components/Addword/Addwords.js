import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from './Addwords.module.css'
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Api/api";
import { AiOutlineCaretDown, AiFillPlusSquare } from 'react-icons/ai'
import { toast, ToastContainer } from "react-toastify";


const Addwords = ({ user }) => {
  const navigate = useNavigate();
  const [dictionary, setDictionary] = useState({
    word: "",
    meaning: "",
    antonym: "",
    synonym: "",
    example: "",
    email: user.email,
  });

  // const [suggestAntonyms,setSuggestAntonyms]=useState([]);
  const [wordData, setWordData] = useState([]);
  const [dropdownvalue, setDropdownValue] = useState("Select");
  const [showlist, setShowList] = useState(false);
  // const[antData2,setAntData2] =useState([])

  const handleChange = (e) => {
    const { name, value } = e.target;
    name !== 'Select' && setDictionary({
      ...dictionary,
      [name]: value,
    });
  };


  // console.log( dictionary[dropdownvalue])



  //   var email=user.email
  const handleAdddata = () => {
    const { word, meaning, antonym, synonym, example, email } = dictionary;
    toast.promise(
      new Promise((resolve, reject) => {
        if (word && email) {
          axios.post(`${BASE_URL}addyourwords`, dictionary).then(() => {
            // setAntData([...antData, { word, antonym, email }]);
            resolve(true)
          }).catch((error) => reject(true))
        } else {
          toast.error('Invalid Input')
        }
      }),
      {
        pending: "Adding Your new word",
        success: "Added Successfully",
        error: "Error Adding Word"
      }
    )

  };


  useEffect(() => {
    getWords()
  }, [])


  const getWords =async () => {
    try {
       const data=await axios.get(`${BASE_URL}getyourwords`)
         
        setWordData(data.data);
        console.log(data.data);
    
    } catch (error) {
      console.log("error fetching add word", error)
    }

  };


  // const handleWord=async()=>{
  //   console.log(dictionary.word);
  //   try {
  //     const res= await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${dictionary.word}`,{ headers:{'X-Api-Key': 'Ls6+vwGvnl/jKMWYGnBQhw==hTeGUXQKdNEMFffu'}},{contentType: 'application/json'})
  //     // const response= await res.json();
  //     console.log(res.data.antonyms);
  //     setSuggestAntonyms(res.data.antonyms);


  //   } catch (error) {
  //     console.log("error while calling api",error.message)
  //   }
  // }

  // useEffect(() => {
  //   getAntonyms();
  // }, []);




  return (
    <>
      {/* {console.log(dictionary.dropdownvalue)} */}
      <div className={styles.main_box}>

        <div className={styles.input_boxes}>
          <input type="text" name="word" onChange={handleChange} />
          <div className={styles.dropdown}>
            <button onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)} > <span>{dropdownvalue} </span><AiOutlineCaretDown /> </button>
            {showlist && <div className={styles.list} onMouseEnter={() => setShowList(true)} onMouseLeave={() => setShowList(false)} onClick={() => setShowList(false)} >
              <p onClick={() => setDropdownValue("meaning")} >Meaning</p>
              <p onClick={() => setDropdownValue("antonym")}>Antonym</p>
              <p onClick={() => setDropdownValue("synonym")}>Synonym</p>
              <p onClick={() => setDropdownValue("example")}>Example</p>
            </div>}
          </div>
          <input type="text" name={dropdownvalue} value={dictionary[dropdownvalue]} onChange={handleChange} />

          <div className={styles.svgs} onClick={handleAdddata} > <AiFillPlusSquare /></div>
        </div>

   <div className={styles.showData}>

     {
      wordData?.map((val,index)=>{
         return(
          <div key={index}>
             <h2>{val.word}</h2>
          </div>
         )
      })
     }

   </div>



      </div>
      <ToastContainer theme="dark" autoClose={2000} />
    </>
  );
};

export default Addwords;
