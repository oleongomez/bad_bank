import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";

import { UserContext } from "./context";
import Card from "./card";
import axios from "axios";

const Withdraw = () => {
  const [show_overdraft, setShowOverdraft] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [updated, setUpdated] = useState(false);

  const url = "http://ec2-54-151-63-111.us-west-1.compute.amazonaws.com:3001/accounts/data";
  const update_url = "http://ec2-54-151-63-111.us-west-1.compute.aaccounts/update_balance";

  const [account, setAccount] = useState({});
  const { status, setContext } = useContext(UserContext);
  useEffect(() => {
    console.log("Deposit context status: ", status);
    if (status.current_user !== undefined) {
      axios
        .post(url, {
          unique_id: status.current_user.user.uid,
          email: status.current_user.user.email,
        })
        .then((res) => {
          console.log(res.data);
          setAccount(res.data);
          setUpdated(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [updated]);
  const handleWithdraw = () => {
    console.log("amount: ", amount);
    console.log("amount as float: ", parseFloat(amount));
    axios
      .post(update_url, { ...account, amount: parseFloat(amount) * -1 })
      .then((value) => {
        console.log("handle_withdraw: ", value);
        if (value.data === "INVALID_OPERATION_OVERDRAFT") {
          console.log("Overdraft protection");
          setShowOverdraft(true);
        } else {
          setAccount(value);
          setUpdated(true);
          setAmount(0.0);
          setShowOverdraft(false);
        }
      });
  };
  const returnCard = () => {
    if (status.current_user !== undefined) {
      return (
        <Card
          bgcolor="primary"
          header="Withdraw"
          status={""}
          body={
            <>
              Balance : ${account.balance}
              <br />
              Withdraw Amount:
              <input
                type="input"
                className="form-control"
                id="amount"
                placeholder="Amount to withdraw"
                value={amount}
                onChange={(e) => {
                  setShowOverdraft(false);
                  setAmount(e.currentTarget.value);
                }}
              />
              <br />
              <button
                type="submit"
                className="btn-primary"
                onClick={handleWithdraw}
              >
                Withdraw
              </button>
              {show_overdraft ? (
                <div className="text-danger">
                  *The amount ${amount} cannot be withdrawn
                </div>
              ) : (
                <></>
              )}
            </>
          }
        />
      );
    } else {
      return (
        <>
          <Redirect to="/login/" />
        </>
      );
    }
  };
  return returnCard();
};
export default Withdraw;
