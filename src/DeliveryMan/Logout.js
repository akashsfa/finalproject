import React from "react";
import { useHistory } from "react-router-dom";

const Logout=()=>{
    const history = useHistory();
    const logout = e => {

        localStorage.removeItem('user');
        localStorage.removeItem('phone');

        alert('logged out');
        e.preventDefault();
        history.push("/");


    }
    return(
        <>
        <button onClick={logout}>Log Out</button>
        </>
    )
}
export default Logout;