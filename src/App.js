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
import Transfer from "./transfer";

const Spa = () => {
  const [status, setContext] = useState({current_user: undefined });
  return (
    <HashRouter>
      <div>
        <UserContext.Provider value={{ status, setContext }}>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/home/" exact component={Home} />
          <Route path="/createaccount/" exact component={CreateAccount} />
          <Route path="/login/" exact component={Login} />
          <Route path="/deposit/" exact component={Deposit} />
          <Route path="/withdraw/" exact component={Withdraw} />
          <Route path="/balance/" exact component={Balance} />
          <Route path="/alldata/" exact component={AllData} />
          <Route path="/transfer/" exact component={Transfer} />
          <Route path="/logout/" exact component={Logout} />
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
};

export default Spa;
