import { useState, useContext, useEffect } from "react";
import { UserContext } from "./context";
import {
  userExists,
  emailExists,
  validateEmail,
  validateName,
  validatePwd,
} from "./utils";
import Card from "./card";
import axios from "axios";
import { createAccountWithEmailAndPassword } from "./firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

let url = "http://ec2-54-151-63-111.us-west-1.compute.amazonaws.com:3001/accounts/add";
const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [created, setCreated] = useState(false);
  const [show_required_email, setShowRequiredEmail] = useState(true);
  const [show_required_name, setShowRequiredName] = useState(true);
  const [show_required_password, setShowRequiredPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let { status, setContext } = useContext(UserContext);
  console.log(status);

  const clearForm = () => {
    setName("");
    setShowRequiredName(true);
    setEmail("");
    setShowRequiredEmail(true);
    setPassword("");
    setShowRequiredPassword(true);
    setShow(true);
    setCreated(false);
  };
  const handleCreate = () => {
    if (validateInputs(name, email, password)) {
      let result = createAccountWithEmailAndPassword({ email, password });
      console.log("create account result", result);
      result
        .then((res) => {
          if ("errorCode" in res) {
            console.log(res.errorCode, res.errorMessage);
          } else {
            console.log("Lets create a new account")
            let new_user = {
              unique_id: res.uid,
              name: name,
              email: res.email,
              balance:0
            }
            axios.post(url, new_user).then((response) => {
              console.log(response);
              setShow(false);
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("invalid data, what are you going to do");
    }
  };
  const validateInputs = (name, email, pwd) => {
    let a = validateEmail(email);
    setShowRequiredEmail(a);
    let b = validateName(name);
    setShowRequiredName(b);
    let c = validatePwd(pwd);
    setShowRequiredPassword(c);
    return a && b && c;
  };
  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={""}
      body={
        show ? (
          <>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
            />
            {show_required_name ? (
              <div className="text-danger">*Name field is required</div>
            ) : (
              <></>
            )}
            <br />
            Email Address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            {show_required_email ? (
              <div className="text-danger">*Valid email is required</div>
            ) : (
              <></>
            )}
            <br />
            Password <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            {show_required_password ? (
              <div className="text-danger">*Password field is required</div>
            ) : (
              <></>
            )}
            <br />
            <button
              type="submit"
              className="btn-primary"
              onClick={handleCreate}
            >
              Create Account
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn-primary" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
};
export default CreateAccount;
