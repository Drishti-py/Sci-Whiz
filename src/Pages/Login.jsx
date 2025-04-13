import React, { useState } from 'react';
import { app } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(app);
const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const loginUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then(value => console.log('Login success'))
            .catch(err => console.log(err));
    };
    return (
        <div className="login_page">
            <h1>Log In</h1>
            <label>Enter your email</label>
            <input onChange={(e) => setEmail(e.target.value)} value={email} type='email' required placeholder='Enter your email'></input>
            <label>Enter your password</label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} type='password' required placeholder='Enter your password'></input>
            <button onClick={loginUser}>Log in</button>

        </div>
    );
};
export default LoginPage;