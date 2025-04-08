import { initializeApp } from 'firebase/app'
const firebaseConfig = {
    apiKey: "AIzaSyDrfGZ7CyWs6z6baFRluM3652cRHLxf1cM",
    authDomain: "sci-whiz.firebaseapp.com",
    projectId: "sci-whiz",
    storageBucket: "sci-whiz.firebasestorage.app",
    messagingSenderId: "218026902918",
    appId: "1:218026902918:web:7cc55cef9e5b73d721d807",
    databaseURL: "https://sci-whiz-default-rtdb.firebaseio.com"
};
export const app = initializeApp(firebaseConfig);