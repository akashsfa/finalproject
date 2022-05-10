import React,{useEffect,useState} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";



const Login=()=>{
        const history = useHistory();
        let [phone,setPhone]=useState();
        let [password,setPass]=useState();

        const loginSubmit=()=>{
      
        var obj ={phone:phone,password:password};
        axios.post("/loginSubmit",obj)
        .then(resp=>{
        console.log(resp.data);

        var token = resp.data;
        if(token){
            var user={phone:token.phone, name:token.name};
            localStorage.setItem('user',JSON.stringify(user));
            history.push("/dashboard");
        }
        else{
            alert("Login Failed! Wrong User");
        }

})
        .catch(err=>{
        console.log(err);
        alert("Phone Number or Password Invalid");
        })


}

return(
    <div>

            <br/><br/><br/><br/><br/><h1><b><i>LOG IN</i></b></h1><br/>
            <form>
            <span>Phone Number</span> <br/>
            <input type= "text" value={phone} onChange={(e)=>setPhone(e.target.value)} /><br/>
            <span>Password</span> <br/>
            <input type= "password" value={password} onChange={(e)=>setPass(e.target.value)} />
            </form>
            <button onClick={loginSubmit}>Login</button><br/><br/>
            <table align='center' border= '2px solid black' border-radius= '10px'>
            </table>
   </div>
)
}
export default Login;