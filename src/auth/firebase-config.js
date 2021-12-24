import { initializeApp } from 'firebase/app';
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCDpF0TyYTCiwPRBYiQsagJryUqXlw4Zw0",
    authDomain: "movie-app-1-128e4.firebaseapp.com",
    projectId: "movie-app-1-128e4",
    storageBucket: "movie-app-1-128e4.appspot.com",
    messagingSenderId: "391876525126",
    appId: "1:391876525126:web:f8f0e61760baf34c765e47"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);