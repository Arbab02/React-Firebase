
import './App.css'
import { useRef } from 'react'
import {app, auth } from "./firebase";
import { createUserWithEmailAndPassword,sendEmailVerification } from "firebase/auth";
// import {  signInWithEmailAndPassword, signOut,onAuthStateChanged } from "firebase/auth";
function App() {
  // const [count, setCount] = useState(0)
const sub      = useRef(null)
const username = useRef(null)
const email    = useRef(null)
const password = useRef(null)

function submit() {
  // const us = username.current.value;
  const em = email.current.value;
  const psw = password.current.value;

  createUserWithEmailAndPassword(auth, em, psw)
       .then((userCredential) => {
         // Signed in 
         sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
    alert("link send")
    // window.location.href='./mcq%20web/index.html'
  });
         const user = userCredential.user;
         alert('user created!')
         // ...
       })
       .catch((error) => {
         const errorCode = error.code;
         const errorMessage = error.message;
         alert(errorMessage)
         // ..
       });
     

}
  return (
    <>
      <div className="box">
  <h1>Sign Up form</h1>
    <input type="text" name="username" ref={username} placeholder="username"/>
    <input type="text" name="email" ref={email} placeholder="email"/>
    <input type="password" name="password" ref={password} placeholder="password"/>
    <button id="sub" onClick={submit} ref={sub}>submit</button>
  </div>

  <div className="box">
    <h1>Login form</h1>
    <input type="text" name="lemail" id="lemail" placeholder="email"/>
    <input type="password" name="lpassword" id="lpassword" placeholder="password"/>
    <button id="lsub">login</button>
  </div>

    
    </>
  )
}

export default App
