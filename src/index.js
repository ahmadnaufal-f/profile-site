import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAypr9JspSwnXlCqsU0UWyXZo1Rn9vhgd4",
    authDomain: "ahmad-naufal-bb5ac.firebaseapp.com",
    projectId: "ahmad-naufal-bb5ac",
    storageBucket: "ahmad-naufal-bb5ac.appspot.com",
    messagingSenderId: "929480397502",
    appId: "1:929480397502:web:86d6dec8b3cf505a5104ef",
    measurementId: "G-2GLVNHLEXG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
