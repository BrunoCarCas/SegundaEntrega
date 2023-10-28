import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from 'firebase/app';


const firebaseConfig = {
  apiKey: "AIzaSyCePs6XcqIYuob9uE6knaZo2Z04-Cdg1YM",
  authDomain: "ecommerce-bruno-476fb.firebaseapp.com",
  projectId: "ecommerce-bruno-476fb",
  storageBucket: "ecommerce-bruno-476fb.appspot.com",
  messagingSenderId: "699368500535",
  appId: "1:699368500535:web:a7a5f0374ab838b4a5beb2"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
