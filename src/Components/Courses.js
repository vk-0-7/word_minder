import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Courses.css'
import { Link } from "react-router-dom";
import  {Coursesdata} from '../Data/data.js' 

const Courses = () => {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (

  <div id="Courses">
     
     <div className="heading">
        
         <h4>What users say about us</h4>
     </div>

   <div className='inner-course'>
     <Slider {...settings}> 
     {Coursesdata.map((item) =>(
        <div className="card" >

       <div  className="card-top">
          <img src={item.Imglink} alt={item.title} /> 
            <h1 >{item.title}</h1>
            </div>  
          <div className="card-bottom">
           <p >{item?.description}</p>
           </div>
        </div> 
      
) )}

     </Slider>
     
   </div>
   </div>
  )
}
 
export default Courses