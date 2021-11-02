import { useState, useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { UserContext } from "./context";
import Card from "./card";
import { signIntoAccountWithEmailAndPassword } from "./firebase";
import { Alert } from "react-bootstrap";
const Login = () => {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [login_result, setLoginResult] = useState("");
  const [goHome, setGoHome] = useState(false)
  const { status, setContext } = useContext(UserContext);

  const handleLogin = () => {
    console.log("login context:", status);
    let result = signIntoAccountWithEmailAndPassword({
      email: user,
      password: password,
    });
    console.log("result: ", result);
    result
      .then((res) => {
        console.log(res);
        if ("errorCode" in res) {
          setLoginResult(res);
        } else {
          setLoginResult(res);
          console.log("Logged user: ", { ...status, current_user: res });
          setContext({ ...status, current_user: res });
        }
        setShow(false);
      })
      .catch((err) => {
        console.log("Cannot log in this fool", err);
      });
  };
  const reset = () => {
    setUser("")
    setPassword("")
    setShow(true)
  }
  const redirect = () => {
    setGoHome(true)
  }
  const showLoginResult = (result) => {
    console.log(result);
    if ("errorCode" in result) {
      return (
        <Alert variant="danger" onClose={()=>reset()} dismissible>
          {`An error ocurred while trying to login ${user}: ${result.errorCode}`}
        </Alert>
      );
    } else {
      return (
        <Alert variant="success" onClose={()=>redirect()} dismissible>
          {`${user} logged in successfully`}
        </Alert>
      );
    }
  };

  const draw = (goHome) =>{
    if(!goHome){
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
            <>
              {showLoginResult(login_result)}
            </>
          )
        }
      ></Card>
    )
    }else{
      return(<Redirect to="/home/"/>)
    }
  }

  return draw(goHome)

};
export default Login;
