import React, { useState ,useEffect} from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import image1 from '../image/image1.png';
import Courses from './Courses';
import Contact from './Contact';
import About from './About';
import Subscribe from './subscribe';
import AfterSubscribe from './aftersubscribe';
import study from '../image/study.jpg'
import { RxCross2 } from 'react-icons/rx'


const Home = ({ user }) => {
    const navigate=useNavigate()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [subscribeModal, setSubscribeModal] = useState(false);
    const [afterSubscribeModal, setAfterSubscribeModal] = useState(false);

  useEffect(() => {
    setTimeout(()=>{
        setSubscribeModal(true)
 },5000)
  }, [])
  
  


    return (
        <div>
            {/* { console.log(user.username)} */}
            <div className="box1">
                <div className="firstImage">
                    <img src={image1} alt=" not found" />
                </div>
                <div className="intro">
                    <p>A Unique  and Creative educational Platform to Improve English Vocabulary. </p>
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

            <About />
            <Courses />
            <Contact />

            {isModalOpen &&

                <Subscribe setIsModalOpen={setIsModalOpen} afterSubscribeModal={afterSubscribeModal} setAfterSubscribeModal={setAfterSubscribeModal}/>

            }
            {
                afterSubscribeModal && <AfterSubscribe setAfterSubscribeModal={setAfterSubscribeModal} />
            }


         { subscribeModal &&  <div className="subscribe">
              <div ><RxCross2 className='cross' onClick={()=>setSubscribeModal(false)} /></div>

              <span> <h4>Want to receive daily words ? </h4> <button onClick={() => setIsModalOpen(true)}>Subscribe Here</button></span> 

               <span><h4>Already Subscribed.Check This Week's New Test  </h4>
              <Link to='https://wordminderadmin.vercel.app'> <button >Check Now</button></Link> 
               </span> 
            </div>}









        </div>
    )
}

export default Home
