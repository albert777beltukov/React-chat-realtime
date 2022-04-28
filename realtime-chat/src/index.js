import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase";
import 'firebase/firestore';
import 'firebase/auth';


firebase.initializeApp({
    apiKey: "AIzaSyC9z08u3nYbmjX_LG1Z04LlB7SCO9JrWgQ",
    authDomain: "chat-8a300.firebaseapp.com",
    projectId: "chat-8a300",
    storageBucket: "chat-8a300.appspot.com",
    messagingSenderId: "1082267685387",
    appId: "1:1082267685387:web:6f47752d08766353ff2d0e",
    measurementId: "G-2TT3HEP4JH"
    }
);

export const Context = createContext(null)

const auth = firebase.auth()
const firestore = firebase.firestore()


ReactDOM.render(
    <Context.Provider value={{
        firebase,
        auth,
        firestore
    }}>
        <App />
    </Context.Provider>,
  document.getElementById('root')
);
