import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useCart } from '../../context/CartContext';
import { NavLink } from 'react-router-dom';
import axios from 'axios'

const MakePyment = () => {
    const [auth] = useAuth();
    const [add,setAdd] = useState()
    const {cartItem} = useCart()
    const filterLength = cartItem.length === 0 ? "" : cartItem.items.filter((f)=>f.user_id===auth.user._id)

    const productId = filterLength.length === 0 ? "" : filterLength.map((l)=>{
        return l._id
    })
    console.log(productId)
  const obj = productId.length===0 ?"" : productId.reduce(function(acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, {});
  const index= 0;
 
  const totalPrice = () =>{
    try {
      let total = 0;
      filterLength.map((t)=>{
        {
          t.products.map((p)=>{
            const discountPrice = Math.round((p.price)-(p.price*p.discount_percents)/100)
            total = total+discountPrice
          })
        }
      })
       return total;
    } catch (error) {
      console.log(error)
    }
  }

 let price = (totalPrice())
  var shippingId = localStorage.getItem("addressId")
  console.log(shippingId)
  let token = auth.token
  const [order,setOrder] =useState({
    product_id :obj[index],
    product_price:price,
    product_dis:50,
    shipping_id:shippingId,
  })
 const ConfirmPayment = async() =>{
    try {
        const config = axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.post("http://localhost:8000/api/order/add-order",order,config) 
        console.log(res.msg)
    } catch (error) {
         console.log(error)
    }
    }
  return (
    <>
    <div className="container  d-flex justify-content-center align-items-center" style={{width:"30%",height:"75vh"}}>
    <div className="checkout cart ">
                 <div className="check text-center">
                   <h5 className='  mb-3'>Checkout | Payment</h5>
                  
                   <h3 className='  mb-3'>{price}</h3>
                   <button className="p-2 text-dark w-100 SignUpBtn" onClick={ConfirmPayment} style={{borderRadius:'5px'}}>Confirm Payment</button> <br />

                   <button className="p-2 mt-2 bg-danger text-dark w-100 SignUpBtn  " style={{borderRadius:'5px'}}>Decline Payment</button> <br />

                 </div>
                 </div>
    </div>
    </>
  )
}

export default MakePyment