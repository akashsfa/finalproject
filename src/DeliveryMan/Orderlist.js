import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

const Home=()=>{
    let object=JSON.parse( localStorage.getItem('user'));
    let phone = object.phone;
const[order,setorder]=useState([]);

useEffect(()=>{

axios.get("/oder")
.then(resp=>{
//console.log(resp.data[0]);
//console.log(resp.data[0]);
console.log (resp.data);
setorder(resp.data);



})
.catch(err=>{
console.log(err);
})



},[]);





return(
<div>

<h1> Order List </h1>
<table align='center' border= '1px solid black' border-radius= '10px'>
<thead>
<tr>
<td>Medicine Name</td>
<td>Medicine ID</td>  
<td>Customer Name</td>
<td>Email</td>
<td>Purching Date</td>
<td>Quantity</td>
<td>Price</td>
<td>Delivery Address</td>
<td> Action </td>
</tr>



</thead>
<tbody>
{
order.map(post => (
<tr key={post.id}>

<td>{post.product_name}</td>
<td>{post.product_id}</td>
<td>{post.customer_name}</td>
<td>{post.customer_mail}</td>
<td>{post.purching_date}</td>
<td>{post.quantity}</td>
<td>{post.price}</td>
<td>{post.delivery_address}</td>
<td><Link to={`/OrderConfirm/${post.id}/${post.product_name}/${phone}`}>Enter</Link></td>

</tr>
))
}
</tbody>
</table><br/><br/><br/>


</div>
)
}
export default Home;