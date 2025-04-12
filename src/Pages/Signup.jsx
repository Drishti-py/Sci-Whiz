import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
const auth = getAuth()
const SignupPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then(value => alert('Success'));
    };
    return (
        <div className='signup_page'>
            <h1>Sign In</h1>
            <label>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required placeholder='Enter your email'></input>
            <label>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required placeholder='Enter your password'></input>
            <button onClick={createUser}>Sign in</button>
        </div>
    );

};
export default SignupPage;