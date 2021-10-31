import { useContext } from "react";
import { UserContext } from "./context";
import { firebaseApp, getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
  }
});

const Balance = () => {
  const ctx = useContext(UserContext);
  return (
    <>
      <h3>Balance</h3>
      {JSON.stringify(ctx.users)}
    </>
  );
};
export default Balance;
