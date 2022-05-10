import React from "react";
import axios from "axios";
import {useParams, useHistory}  from 'react-router-dom';


const OrderConfirm=()=>{

    const history = useHistory();
    const {id, product, phone} = useParams();
    var Submit=()=> {


        var obj ={id:{id}, phone:{phone}};
                axios.post("/OderListConfirm",obj)
                .then(resp=>{
                    alert("Confirm Successfull");
                    console.log(resp.data);
                    history.push("/orderlist");
                })

                .catch(err=>{

                    console.log(err.data);
                })
      }

    return (

        <div>

            <br/><br/><br/><h3>You want to Delivery Product Name : <font size='6'>{product}</font> </h3><br/><br/>     


    <br/><br/>

    <button onClick={Submit}> Confirm Request</button>

    </div>



    )

}

export default OrderConfirm;