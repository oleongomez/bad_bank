import { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";
import Card from "./card";
import axios from "axios";

const Deposit = () => {
  const [amount, setAmount] = useState(0.0);
  const [updated, setUpdated] = useState(false)

  const url = "http://localhost:3001/accounts/data";
  const update_url = "http://localhost:3001/accounts/update_balance";

  const [account, setAccount] = useState({});
  const { status, setContext } = useContext(UserContext);

  useEffect(() => {
    console.log("Deposit context status: ", status);
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
          setUpdated(false)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  },[updated]);
  //TODO: validate that only accepts numbers and positive
  //TODO: Round the balance to 3 digits
  const handleDeposit = () => {
    console.log("amount: ", amount);
    console.log("amount as float: ", parseFloat(amount));
    axios.post(update_url,{...account, amount:parseFloat(amount)}).then(value=>{
      console.log(value)
      setAccount(value)
      setUpdated(!updated)
      setAmount(0.0)
    })
  };
  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={""}
      body={
          <>
            Balance : $ 
            {account.balance}
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
        
      }
    />
  );
};
export default Deposit;
