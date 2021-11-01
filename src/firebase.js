// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signOut, getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB4KMoFZ0F8qL2XATPoPbjYz7U8wGL0cXE",
  authDomain: "my-banking-application.firebaseapp.com",
  projectId: "my-banking-application",
  storageBucket: "my-banking-application.appspot.com",
  messagingSenderId: "837948833463",
  appId: "1:837948833463:web:ae1b5aa828f87d77ea1732",
  measurementId: "G-07NGBR7T9P",
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const analytics = getAnalytics(firebaseApp);

export const createAccountWithEmailAndPassword = (account) => {
    let email = account.email
    let password = account.password
    let result = 
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
      return(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode)
      console.log(errorMessage)
      return ({errorCode,errorMessage})
    });
    return result
};
export function signIntoAccountWithEmailAndPassword(account){
  let email = account.email
  let password = account.password
  let result =
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user)
    return({user:user})
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.code)
      console.log(error.message)
      return ({errorCode,errorMessage})
    });
    return result
};

export function logOut(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("Logged out")
      }).catch((error) => {
        // An error happened.
        console.log(error)
      });
}