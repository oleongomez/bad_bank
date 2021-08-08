import { useState, useContext, useEffect } from "react"
import { UserContext } from "./context";
import Card from "./context";
import {getUserObject} from "./utils"

const Deposit = () => {
  const [show, setShow] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [balance, setBalance] = useState(0.0);
  const { status, setContext } = useContext(UserContext);
  useEffect(() => {
    console.log("Rendering ...", status);
    console.log(
      "Current user balance:",
      status.current_user !== undefined
        ? status.current_user.balance
        : "Not defined"
    );
    setShow(status.current_user !== undefined);
    setBalance(
      status.current_user !== undefined ? status.current_user.balance : null
    );
  },[status]);
  const handleDeposit = () => {
    console.log("amount: ", amount);
    console.log("amount as float: ", parseInt(amount));
    console.log("user object: ", status.current_user);
    console.log(
      "user object balance as float: ",
      parseFloat(status.current_user.balance),
      typeof status.current_user.balance
    );

    let newBalance =
      parseFloat(status.current_user.balance) + parseFloat(amount);
    console.log("new balance: ", newBalance);
    setAmount(0.0);
    setBalance(newBalance);

    let newUsers = status.users.map((user) => {
      if (user.name === status.current_user.name) {
        user.balance = newBalance;
      }
      return user;
    });

    console.log(newUsers);
    setContext({
      users: newUsers,
      current_user: getUserObject(status.current_user.name, newUsers),
    });
    console.log(status);
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
