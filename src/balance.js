import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";
import Card from "./card";
import axios from "axios";
import { Redirect } from "react-router";
const Balance = () => {
  const url = "http://ec2-54-151-63-111.us-west-1.compute.amazonaws.com:3001/accounts/data";
  const [account, setAccount] = useState({});
  const { status} = useContext(UserContext);
  useEffect(() => {
    console.log("Balance context status: ", status);
    if (status.current_user!== undefined) {
      axios
        .post(url,{
              unique_id: status.current_user.user.uid,
              email: status.current_user.user.email,
            }
        )
        .then((res) => {
          console.log(res.data);
          setAccount(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const get_balance = (account) => {
    if (account !== null) {
      return (
        <>
          <Card
            bgcolor="primary"
            header={account.name}
            body={<>Current Balance: {account.balance}</>}
          />
        </>
      );
    } else {
      return <Redirect to="/login/"/>
    }
  };
  return get_balance(account);
};
export default Balance;
