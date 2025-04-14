import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { app } from "./firebase";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Navbar from './Pages/Navbar';
import Choice from './Pages/Choice';
import Activity5_8 from './Pages/Activity5-8';
import Activity9_12 from './Pages/Activity9-12';
import Activity13_17 from './Pages/Activity13-17';
import './App.css';

const auth = getAuth(app);
function App() {
    const [selectedTags, setSelectedTags] = useState(() => {
        const saved = localStorage.getItem('selectedTags');
        return saved ? JSON.parse(saved) : ['Home'];
    });

    useEffect(() => {
        localStorage.setItem('selectedTags', JSON.stringify(selectedTags));
    }, [selectedTags]);

    const signupUser = () => {
        createUserWithEmailAndPassword(auth,
            "drishtichandpa.cute@gmail.com",
            "Drishticutie"
        ).then((value) => console.log(value));

    };

    return (
        <div className='App'>
            {/* <SignupPage />
            <LoginPage /> */}
            {/* <Dashboard /> */}

            <Router>
                <Routes>
                    {/* <Route path="/" element={<Dashboard />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Signup" element={<SignupPage />} /> */}

                    <Route path="/" element={<Choice selectedTags={selectedTags} setSelectedTags={setSelectedTags} />} />
                    <Route path="/Navbar" element={<Navbar />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Activity5-8" element={<Activity5_8 />} />
                    <Route path="/Activity9-12" element={<Activity9_12 />} />
                    <Route path="/Activity13-17" element={<Activity13_17 />} />



                </Routes>
            </Router>



        </div>
    );
}

export default App;
