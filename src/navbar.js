import { useState } from 'react';
import {uuid} from './utils'
import {Link} from './context'

const NavBar = () => {
  const [links, setLinks] = useState([
    { text: "BadBank", address: "/", active: false },
    { text: "Create Account", address: "/createaccount/", active: false },
    { text: "Login", address: "/login/", active: false },
    { text: "Deposit", address: "/deposit/", active: false },
    { text: "Withdraw", address: "/withdraw/", active: false },
    { text: "Balance", address: "/balance/", active: false },
    { text: "All Data", address: "/alldata/", active: false },
  ]);
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
        <ListItem key={uuid()} item={item} callback={onClick} />
      ))}
    </ul>
  );
};

const ListItem = ({ item, callback }) => {
  return (
    <li key={uuid()} className="nav-item">
      <Link
        key={uuid()}
        className={item.active ? "navlink-active nav-link" : "navlink nav-link"}
        to={item.address}
        onClick={callback}
      >
        {item.text}
      </Link>
    </li>
  );
};

export default NavBar;
