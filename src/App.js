import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
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
            <Dashboard />
        </div>
    );
}

export default App;
