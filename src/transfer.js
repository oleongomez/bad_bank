import Card from "./card";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";
import axios from "axios";

const Transfer = () => {
  const [show_overdraft, setShowOverdraft] = useState(false);
  const [amount, setAmount] = useState(0.0);
  const [updated, setUpdated] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState("");
  const [recipient, setRecipient] = useState({});
  const [found, setFound] = useState(false);

  const url = "http://localhost:3001/accounts/data";
  const update_url = "http://localhost:3001/accounts/update_balance";

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

  const handle_transfer = () => {
    console.log("Start Transfer");
    console.log("amount: ", amount);
    console.log("amount as float: ", parseFloat(amount));
    let result = axios
      .post(update_url, { ...account, amount: parseFloat(amount) * -1 })
      .then((value) => {
        console.log("handle_withdraw: ", value);
        if (value.data === "INVALID_OPERATION_OVERDRAFT") {
          console.log("Overdraft protection");
          setShowOverdraft(true);
          return;
        }
        if (value.data === "NON_EXISTENT_ACCOUNT") {
          console.log("Account does not exists", value.data);
          return;
        }
        console.log("I have deducted the amount");
        console.log("Will search for recipient:", recipientEmail);
        setAccount(value);
        setShowOverdraft(false);
        return axios
          .post(update_url, {
            ...recipient,
            amount: parseFloat(amount),
          })
          .then((response) => {
            console.log(response);
          });
      });
    setUpdated(true);
    setAmount(0.0);
    console.log("Result: ", result);
  };

  const handle_search = () => {
    console.log("Start Search");
    axios
      .post(url, { email: recipientEmail })
      .then((res) => {
        console.log("recipient search data", res.data);
        setRecipient(res.data);
        setFound(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Card
        bgcolor="primary"
        header="Transfer money"
        status={""}
        body={
          <>
            Balance : ${account.balance}
            <Form>
              <Row className="mb-3">
                <Form.Group>
                  <FloatingLabel
                    label="Enter recipient email"
                    className="form-label mb-3"
                  >
                    <Form.Control
                      type="email"
                      placeholder="name@example.com"
                      onChange={(e) => {
                        setRecipientEmail(e.currentTarget.value);
                      }}
                    />
                  </FloatingLabel>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handle_search}
                  >
                    Search
                  </Button>
                </Form.Group>
              </Row>
              {found ? (
                <Row className="mb-3">
                  <Form.Group>
                    <FloatingLabel
                      label="Amount to transfer"
                      className="form-label mb-3"
                    >
                      <Form.Control
                        type="input"
                        id="amount"
                        placeholder="Amount to withdraw"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.currentTarget.value);
                        }}
                      />
                    </FloatingLabel>
                    <Button
                      type="submit"
                      className="btn-primary"
                      onClick={handle_transfer}
                    >
                      Transfer
                    </Button>
                  </Form.Group>
                </Row>
              ) : (
                <></>
              )}
            </Form>
          </>
        }
      />
    </>
  );
};

export default Transfer;
