import { useContext, useEffect, useState } from "react";
import Card from "./card";
import axios from "axios";

const AllData = () => {
  const [accounts, setAccounts] = useState([]);
  const get_all_accounts = () => {
    axios
      .get("http://localhost:3001/accounts/all_data")
      .then((res) => {
        console.log(res.data);
        const allAccounts = res.data;
        setAccounts(allAccounts);
      })
      .catch((err) => {
        console.error(err);
      });
    return;
  };
  useEffect(() => {
    get_all_accounts();
  }, []);

  if (accounts.length > 0) {
    console.log("Something to show");
    return (
      <>
        {accounts.map((account, index) => {
          console.log("account: ",account.name,account.email, account._id)
          return (
            <Card id={index}
              bgcolor="primary"
              header={account.name}
              status=""
              body={
                <>
                  email:{account.email}
                  <br />
                  password:{account.password}
                  <br />
                  balance:{account.balance}
                  <br />
                  account id:{account._id}
                </>
              }
            ></Card>
          );
        })}
      </>
    );
  } else {
    console.log("Nothing to show");
    return <h3>No accounts yet</h3>;
  }
};
export default AllData;
