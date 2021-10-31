import { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";
import Card from "./card";
import { getUserObject } from "./utils";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./firebase";
import { initializeApp } from "firebase/app";
import axios from "axios";

const app = initializeApp(firebaseConfig);

const Deposit = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [balance, setBalance] = useState(0.0);
  const [account, setAccount] =useState({})

  useEffect(() => {
    console.log("Rendering ...");
    // request user data to backend
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const email = user.email
        const account = {uid,email}
        console.log("user logged in", uid);
        let url = 'http://localhost:3001/accounts/data'

        axios.get(url,{params:account}).then(res=>{
          console.log(res)
        })
        setShow(true);
        // ...
      } else {
        // User is signed out
        // ...
        setShow(false);
      }
    });
  }, []);
  const handleDeposit = () => {
    console.log("amount: ", amount);
    console.log("amount as float: ", parseInt(amount));

    // console.log("user object: ", status.current_user);
    // console.log(
    //   "user object balance as float: ",
    //   parseFloat(status.current_user.balance),
    //   typeof status.current_user.balance
    // );
    // let newBalance =
    //   parseFloat(status.current_user.balance) + parseFloat(amount);
    // console.log("new balance: ", newBalance);
    // setAmount(0.0);
    // setBalance(newBalance);

    // let newUsers = status.users.map((user) => {
    //   if (user.name === status.current_user.name) {
    //     user.balance = newBalance;
    //   }
    //   return user;
    // });

    // console.log(newUsers);
    // setContext({
    //   users: newUsers,
    //   current_user: getUserObject(status.current_user.name, newUsers),
    // });
    // console.log(status);
  };
  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={""}
      body={
        show ? (
          <>
            Balance :$
            {balance}
            <br />
            Deposit Amount:
            <input
              type="input"
              className="form-control"
              id="amount"
              placeholder="Amount to deposit"
              value={amount}
              onChange={(e) => setAmount(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn-primary"
              onClick={handleDeposit}
            >
              Deposit
            </button>
          </>
        ) : (
          <>
            <h3>Must login to show this page</h3>
          </>
        )
      }
    ></Card>
  );
};
export default Deposit;
