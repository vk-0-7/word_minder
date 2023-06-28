import React ,{useState,useEffect} from 'react'
import axios from 'axios'
import './AddSynonyms.css'
import { BASE_URL } from '../../Api/api';

const AddSynonyms = ({user}) => {
  const [suggestSynonyms,setSuggestSynonyms]=useState([]);

  const [Syno,setSyno]=useState({
    word:"",
    synonym:"",
    email:user.email,
  })


  const[synData,setSynData] =useState([])

const AddSyno=(e) =>{
    const {name,value}=e.target
    setSyno({...Syno,
        [name]:value,  })
}

 const AddSynonym= ()=>{
      const{word,synonym,email}=Syno;
      if(word && synonym && email){
        axios.post(`${BASE_URL}addsynonyms`,Syno)
        .then(() =>{
            setSynData([...synData,{word,synonym,email}])
            
        })
        
      }
         else{
          alert("Invalid Input");
         }
 }

 const getSynonyms=()=>{
  axios.get(`${BASE_URL}getsynonyms`)
     .then((response) =>{
       const data=response.data
       setSynData(data)
       
  
      })
  }
  
  
    useEffect(() =>{
     getSynonyms();
     
    },[])



    const handleWord=async()=>{
      console.log(Syno.word);
      try {
        const res= await axios.get(`https://api.api-ninjas.com/v1/thesaurus?word=${Syno.word}`,{ headers:{'X-Api-Key': 'Ls6+vwGvnl/jKMWYGnBQhw==hTeGUXQKdNEMFffu'}},{contentType: 'application/json'})
        // const response= await res.json();
        console.log(res.data.synonyms);
        setSuggestSynonyms(res.data.synonyms);
  
  
      } catch (error) {
        console.log("error while calling api",error.message)
      }
    }

    const addSuggestedSynonyms=(e)=>{

      const { name, value } = e.target;
      setSyno({
        ...Syno,
        [name]: value,
      });
  
    }


  return (
    <>
    
     <div class=" col justify-content-center d-flex ">

<div className="input" >
  <input type="text"  name='word' value={Syno.word} onChange={AddSyno} placeholder="eg. Fat" />
  <button className='suggest_btn' style={{width:"8rem",fontSize:"1rem"}} onClick={handleWord}>Find synonyms</button>
 
  <input type="text"   name='synonym' value={Syno.synonym} onChange={AddSyno} placeholder="Bulky" />
</div>

<button type="button"  onClick={AddSynonym}>Add</button>
    </div>

    <div className="suggest">{
        suggestSynonyms.map((val,index)=>{
           return(<>
        
            <button value={val} id='item' name='synonym' onClick={(e)=>addSuggestedSynonyms(e)}> {val} </button><br />
            </>
           )
        

        })
      } </div>

    <div className="table">
    <table>
    <tr>
        <th>word</th>
        <th>Synonyms</th>
    </tr>

    {
         synData.map((element,index)=>{

            if(element.email===Syno.email){
           return(
            <>
             <tr>
           <td>{element.word}</td>
           <td>{element.synonym}</td>
            </tr>
            </>
           )}
                                      
 })
        } 

           
     </table>

     </div>

    </>
  )
}

export default AddSynonyms