import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./home";
import Login from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";
import NavBar from "./navbar";
import CreateAccount from "./createaccount";
import { UserContext, HashRouter, Route } from "./context";
import Logout from "./logout";

const Spa = () => {
  const [status, setContext] = useState({current_user: undefined });
  return (
    <HashRouter>
      <div>
        <UserContext.Provider value={{ status, setContext }}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/createaccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
          <Route path="/logout/" component={Logout} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
};

export default Spa;
