import React from "react";



const Dashboard=()=>
{
    let object=JSON.parse(localStorage.getItem('user'));
    let name = object.name;

    return(
        <div>
            <h1> Dashboard </h1>
            Hello, {name}!
        </div>
         
    )
}

export default Dashboard;