import { useContext } from "react";
import { UserContext } from "./context";
const Balance = () => {
  const ctx = useContext(UserContext);
  return (
    <>
      <h3>Balance</h3>
      {JSON.stringify(ctx.users)}
    </>
  );
};
export default Balance;
