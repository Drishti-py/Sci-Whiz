import React, { useState } from 'react';

function Dashboard() {

    return (
        <div className='dash'>
            <nav className='head'>
                <img src='' className='logo' ></img>
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
                <p className='bottom_text'>Home</p>
            </div>


        </div>
    );
}
export default Dashboard;