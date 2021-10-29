import { useState, useContext } from "react";
import { UserContext } from "./context";
import {
  userExists,
  emailExists,
  validateEmail,
  validateName,
  validatePwd,
} from "./utils";
import Card from "./context";
import axios from "axios";
let url = "http://localhost:3001/accounts/add"
const CreateAccount = () => {
  const [show, setShow] = useState(true);
  const [show_required_email, setShowRequiredEmail] = useState(true);
  const [show_required_name, setShowRequiredName] = useState(true);
  const [show_required_password, setShowRequiredPassword] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { status, setContext } = useContext(UserContext);
  const clearForm = () => {
    setName("");
    setShowRequiredName(true);
    setEmail("");
    setShowRequiredEmail(true);
    setPassword("");
    setShowRequiredPassword(true);
    setShow(true);
  };
  const handleCreate = () => {
    // console.log(status);
    // if (userExists(name, status.users)) {
    //   alert(`${name} already exists...`);
    //   return;
    // }
    // if (emailExists(email, status.users)) {
    //   alert(`${email} already exists....`);
    //   return;
    // }
    if (validateInputs(name, email, password)) {
      let new_user = {
        name: name,
        email: email,
        password: password,
        balance: 0,
      };
      axios.post(url, new_user).then((response) => {
        if (response.data === "ALREADY_EXISTS") {
          alert(`${new_user.name} or ${new_user.email} already exists`);
          return;
        } else {
          setShow(false);
        }
      })
      .catch(error => {
        console.error(error)
        alert(`${error} happened when processing this request`);
        setShow(true)
      });
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
