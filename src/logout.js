import {logOut} from './firebase'
import { useContext, useEffect } from 'react';
import { UserContext } from './context';

const Logout = () => {
    const { status, setContext } = useContext(UserContext);
    useEffect(() =>{
        logOut()
    setContext({})
    },[])
        return(<></>)
}

export default Logout