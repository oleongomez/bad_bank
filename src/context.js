import {Route as Route_, Link as Link_, HashRouter as HashRouter_} from 'react-router-dom'
import { createContext } from "react";
export const Route = Route_;
export const Link = Link_;
export const HashRouter = HashRouter_;
export const UserContext = createContext({
  status: {current_user: undefined},
  setContext: () => {console.log("setting context")},
});
