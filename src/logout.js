import {logOut} from './firebase'
import { useContext, useEffect } from 'react';
import { UserContext } from './context';
import { Redirect } from 'react-router';

const Logout = () => {
    const { status, setContext } = useContext(UserContext);
    useEffect(() =>{
        logOut()
    setContext({})
    },[])
        return(<><Redirect to="/home"/></>)
}

export default Logout