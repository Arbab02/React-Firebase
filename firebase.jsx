import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

     // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA6Df9iymeKfkLPrkA_J9-3bFX46_SyA9k",
    authDomain: "auth2-e362b.firebaseapp.com",
    projectId: "auth2-e362b",
    storageBucket: "auth2-e362b.appspot.com",
    messagingSenderId: "959120241085",
    appId: "1:959120241085:web:27be20d2169d016454a2d4"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  export {app,auth}