import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div className='dash'>
            <nav className='head'>
                <img src='final_logo.png' className='logo' ></img>

            </nav>

            <div>
                <div id='back'>
                    <video
                        className="video_len"
                        autoPlay
                        muted
                        loop
                        playsInline
                    >
                        <source src="my_video1.mp4" type="video/mp4" />

                    </video>
                    <div>
                        <div className='text_container'>
                            <p className='content'>Welcome</p>

                            <button onClick={() => navigate('/Login')} className='login'>Go to Login In</button>
                            <button onClick={() => navigate('/Signup')} className='signin'>Go to Sign Up</button>
                        </div>
                        <div className='container2'>
                            <div className='text_container2'>
                                <p className='content'>Welcome</p>
                            </div>
                            <div className='text_container3'>
                                <p className='content'>Welcome</p>
                            </div>

                        </div>



                    </div>


                </div>
            </div>
            <div className='bottom'>
                <div className='text_box'>
                    <a className='bottom_text' onClick={() => navigate('/Dashboard')}>Home</a><br></br>
                    <a className='bottom_text' onClick={() => navigate('/Login')}>About us</a><br></br>
                    <a className='bottom_text' onClick={() => navigate('/Login')}>Contact Us</a><br></br>
                    <a className='bottom_text' onClick={() => navigate('/Login')}>Help</a>

                </div>

            </div>


        </div>
    );
}
export default Dashboard;