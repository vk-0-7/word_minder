import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'


const Dashboard = () => {
  return (
    <div className='left_filter'>
       <Link to={"/adminAntonyms"}>  <p>Add antonyms</p> </Link>
      <Link to={"/adminSynonyms"}> <p>Add Synonyms</p> </Link> 
        


    </div>
  )
}

export default Dashboard