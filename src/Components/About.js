import React from 'react'
import './About.css'
import  imge from '../image/img.jpg'

const About = () => {
  return (
    <div className='about-section'>
        <div className="description">
        <h1>Who We Are?</h1>
        <h3>
          This is a platform where You can get help learning english. You can Add any word with their meaning,antonym,synonym,examples and Revise them any time By giving Quizzes. so,that you can learn better and quickly.
          <br />
         You can also subscribe here to receive daily words and weekly quizzes</h3>
        </div>
        <img src={imge} alt="nothing found" /> 


    </div>
  )
}

export default About