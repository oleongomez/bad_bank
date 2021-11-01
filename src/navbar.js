import { useState, useContext, useEffect } from "react";
import { uuid } from "./utils";
import { Link } from "./context";
import { UserContext } from "./context";

const NavBar = () => {
  const [links, setLinks] = useState([
    { text: "BadBank", address: "/", active: false, user_needed: false },
    {
      text: "Create Account",
      address: "/createaccount/",
      active: false,
      user_needed: false,
    },
    { text: "Login", address: "/login/", active: false, user_needed: false },
    { text: "Deposit", address: "/deposit/", active: false, user_needed: true },
    {
      text: "Withdraw",
      address: "/withdraw/",
      active: false,
      user_needed: true,
    },
    { text: "Balance", address: "/balance/", active: false, user_needed: true },
    {
      text: "All Data",
      address: "/alldata/",
      active: false,
      user_needed: false,
    },
    { text: "Log out", address: "/logout/", active: false, user_needed: true },
    {
      text: "Transfer Money",
      address: "/transfer/",
      active: false,
      user_needed: true,
    },
  ]);

  const { status, setContext } = useContext(UserContext);

  useEffect(() => {
    console.log("Navbar use effect", status);
  }, [status]);

  const onClick = (e) => {
    let newState = links.map((link) => {
      if (link.text === e.target.innerHTML) {
        link.active = true;
      } else {
        link.active = false;
      }
      return link;
    });
    setLinks(newState);
  };

  return (
    <ul className="bg-dark text-ligth nav">
      {links.map((item) => (
        <ListItem
          key={uuid()}
          item={item}
          callback={onClick}
          isLogged={status.current_user !== undefined}
        />
      ))}
    </ul>
  );
};

const create_item = (item, callback, isLogged) => {
  console.log("user_needed: ", item.user_needed);
  if (isLogged || !item.user_needed) {
    return (
      <li key={uuid()} className="nav-item">
        <Link
          key={uuid()}
          className={
            item.active ? "navlink-active nav-link" : "navlink nav-link"
          }
          to={item.address}
          onClick={callback}
        >
          {item.text}
        </Link>
      </li>
    );
  } else {
    return <></>;
  }
};

const ListItem = ({ item, callback, isLogged }) => {
  return create_item(item, callback, isLogged);
};

export default NavBar;
