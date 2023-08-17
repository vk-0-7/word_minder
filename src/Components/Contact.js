import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div id='Contact'>
      <div className="columns">
          <div  id='col'>
         <h2>Help Desk</h2>
          <h5>Customer Care</h5>
          <h5>Legal Help</h5>
          <h5>Services</h5>
          <h5>Privacy Policy</h5>
          <h5>Call us</h5>
          </div>
         <div className="col2">
         <h2> services</h2>
           <h5>Add Words</h5>
           <h5>Subscribe</h5>
           <h5>Play quiz</h5>
           <h5>Weekly Quiz</h5>

         </div>
      </div>
         <div className="copyright">
            <h6>Copyright 2022 All rights reserved  </h6> 
         </div>
    </div>
  )
}

export default Contact