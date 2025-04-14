import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { app } from "./firebase";
import SignupPage from './Pages/Signup';
import LoginPage from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import './App.css';

const auth = getAuth(app);
function App() {
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
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/Login" element={<LoginPage />} />
                    <Route path="/Signup" element={<SignupPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
