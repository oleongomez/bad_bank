import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";
import Card from "./card";
import CreateAccount from "./createaccount";
import axios from "axios";
const Balance = () => {
  const url = "http://localhost:3001/accounts/data";
  const [account, setAccount] = useState(null);
  const { status, setContext } = useContext(UserContext);
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
      return <></>;
    }
  };
  return get_balance(account);
};
export default Balance;
