import React from 'react'
import './aftersubscribe.css'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const AfterSubscribe = ({setAfterSubscribeModal}) => {

 

    return (
        <div
            style={{
                position: "fixed",
                height: "100vh",
                width: "100vw",
                top: "0",
                left: "0",
                zIndex: "1000",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
        >
            <div
                className='main_page'
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <RxCross2

                    onClick={() => setAfterSubscribeModal(false)}
                    className='cross'
                />
                <div className='main_body'>
                    {" "}
                    <h2>
                        {" "}
                        You have subscribe Here.  <br />
                        Checkout new Test of this week.
                    </h2>
                    <Link to={'https://wordminderadmin.vercel.app/'}> <button className="click_btn">Check Now</button></Link>
                </div>
            </div>

        </div>
    )
}

export default AfterSubscribe