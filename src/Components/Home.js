import React,{useState} from 'react'
import './Home.css'
import image1 from '../image/image1.png';
import Courses from './Courses';
import Contact from './Contact';
import  About  from './About';
import Subscribe from './subscribe';
import study from '../image/study.jpg'
 

const Home = ({user}) => {

    const [isModalOpen,setIsModalOpen]=useState(false);

    return (
        <div>
           {/* { console.log(user.username)} */}
            <div className="box1">
              <div className="firstImage">
            <img src={image1} alt=" not found" />
            </div>  
        <div className="intro">
            <p>A Unique  and Creative educational Platform to improve English Grammer. </p>
         </div>
        {/* <div className="intro2">
          <h5>  A Unique and creative educational platform to enhance english grammer.</h5> 
           
        </div> */}


        <div className="img">
            <img src={study} alt="Refresh the page" />
            <div className="overlay"></div>
        </div>

            </div>
        {/* <div className="info">
             <p> This App will keep a record of your english words and will make you memorise through interesting quiz . Add unlimited words you want and then take a quiz any time <br /> <span> Start Now by just creating an account </span></p>
        </div> */}
              
         <About/>
         <Courses/>
         <Contact/>

       { isModalOpen && 
           
            <Subscribe setIsModalOpen={setIsModalOpen}/>
         
         }


     <div className="subscribe">
         <p>Want to receive daily words ? </p> <button onClick={()=>setIsModalOpen(true)}>Subscribe Here</button>
     </div>









        </div>
    )
}

export default Home
