// Import the functions you need from the SDKs you need
import firabase from "firebase/compat/app";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3FlqWdu_iS5zlR-cxqVAsMcihLP-DwgQ",
  authDomain: "fir-auth-test-fd20b.firebaseapp.com",
  projectId: "fir-auth-test-fd20b",
  storageBucket: "fir-auth-test-fd20b.appspot.com",
  messagingSenderId: "845108704841",
  appId: "1:845108704841:web:316b9276b0397a9ff27198"
};

// Initialize Firebase

let app;

if(firebase.apps.length ===0){
    app = firabase.initializeApp(firebaseConfig);
}else{
    app = firabase.app();
}

const auth = firabase.auth();

export { auth }