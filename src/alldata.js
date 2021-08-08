import {useContext } from "react";
import { UserContext } from "./context";
import Card from "./context";

const AllData = () => {
  const { status, } = useContext(UserContext);
  return (
    <>
      {status.users.map((user) => {
        return (
          <Card
            bgcolor="primary"
            header={user.name}
            status=""
            body={
              <>
                email:{user.email}
                <br />
                password:{user.password}
              </>
            }
          ></Card>
        );
      })}
    </>
  );
};
export default AllData;
