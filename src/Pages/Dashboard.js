import React, { useState } from 'react';

function Dashboard() {

    return (
        <div className='dash'>
            <nav className='head'>
                <img src='https://sdmntprnorthcentralus.oaiusercontent.com/files/00000000-2bd8-622f-8fde-0b982ba33e2e/raw?se=2025-04-13T18%3A36%3A03Z&sp=r&sv=2024-08-04&sr=b&scid=0f04d3a5-39ab-5ea5-b062-b90d6940e332&skoid=de76bc29-7017-43d4-8d90-7a49512bae0f&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-13T04%3A49%3A38Z&ske=2025-04-14T04%3A49%3A38Z&sks=b&skv=2024-08-04&sig=QDG1TFmYGaAp%2BlHQg5CWWSB8WiM2xhftjvmgdut9wOk%3D' className='logo' ></img>
            </nav>
            <img src="https://cdn.dribbble.com/userupload/20060762/file/original-89e23399b461e9274e9f2f9acacc5ee7.gif" alt="funny gif" />

            {/* <div className='text'></div> */}
            <div>
                <div className='b1' id='back'> </div>
                <div className='b2' id='back'> </div>
                <div className='b3' id='back'> </div>
                <div className='b4' id='back'> </div>
            </div>


        </div>
    );
}
export default Dashboard;