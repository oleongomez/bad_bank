import { useState, useContext } from "react";
import { UserContext } from "./context";
import Card from "./context";
import {canLogin, getUserObject} from './utils'
const Login = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { status, setContext } = useContext(UserContext);
  const handleLogin = () => {
    if (!canLogin(user, password, status.users)) {
      alert("Cannot login this user/password combination...");
      setUser("");
      setPassword("");
      return;
    }
    setContext({
      users: status.users,
      current_user: getUserObject(user, status.users),
    });
    // redirect to home??
  };
  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={""}
      body={
        show ? (
          <>
            User or email:
            <br />
            <input
              type="input"
              className="form-control"
              id="user"
              placeholder="Enter user or email"
              value={user}
              onChange={(e) => setUser(e.currentTarget.value)}
            />
            <br />
            Password:
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button type="submit" className="btn-primary" onClick={handleLogin}>
              Login
            </button>
          </>
        ) : (
          <></>
        )
      }
    ></Card>
  );
};
export default Login;
