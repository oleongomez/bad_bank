import { useState, useContext } from "react";
import { UserContext } from "./context";
import Card from "./card";
import { canLogin, getUserObject } from "./utils";
import { signIntoAccountWithEmailAndPassword } from "./firebase";
const Login = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [login_result, setLoginResult] = useState("");
  const { status, setContext } = useContext(UserContext);

  const handleLogin = () => {
    console.log("login context:", status)
    let result = signIntoAccountWithEmailAndPassword({
      email: user,
      password: password,
    });
    console.log("result: ", result);
    result
      .then((res) => {
        console.log(res);
        if('errorCode' in res){
          setLoginResult(`An error ocurred while trying to login ${user}: ${res.errorCode}`)
        }
      else{
        setLoginResult(`${user} logged in successfully`);
        console.log("Logged user: ", {...status, current_user:res})
        setContext({...status, current_user:res})
      }
      setShow(false)
      })
      .catch((err) => {
        console.log("Cannot log in this fool", err);
      });
  };
  return (
    <Card
      bgcolor="primary"
      header="Login"
      status={""}
      body={
        show ? (
          <>
            <form>
              email:
              <br />
              <input
                type="input"
                className="form-control"
                id="user"
                placeholder="Enter email"
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
              <button
                type="submit"
                className="btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </>
        ) : (
          <>{login_result}</>
        )
      }
    ></Card>
  );
};
export default Login;
