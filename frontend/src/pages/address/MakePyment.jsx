import React, { useState } from 'react'
import { useAuth } from '../../context/authContext';
import { useCart } from '../../context/CartContext';
import { NavLink, useNavigate } from 'react-router-dom';
import Loading from "../../components/Loading"
import axios from 'axios'
import { toast } from 'react-toastify';
import MessageBox from '../../components/MessageBox';

const MakePyment = () => {
    const [auth] = useAuth();
    const [add,setAdd] = useState()
    const {cartItem} = useCart()
    const [showModal,setShowModal] = useState(false)
    const navigate = useNavigate();
    const [loading,setLoading] = useState(false)
    const [transaction_id] = useState(Math.random().toString(36).substring(2, 20)); 
    
    const filterLength = cartItem.length === 0 ? "" : cartItem.items.filter((f)=>f.user_id===auth.user._id)

    const productId = filterLength.length === 0 ? "" : filterLength.map((l)=>{
        return l.product_id
    })
    const product_dis = filterLength.length === 0 ? "" : filterLength.map((l)=>{
      return l.products
  })
  
  const merge = product_dis.length === 0 ? "" : product_dis.flat(1)

  const discount = merge.length === 0 ? "" : merge.map((l)=>{
    return l.discount_percents
})
 console.log(discount)
 const obj1 = discount.length===0 ?"" : discount.reduce(function(acc, cur, i) {
  acc[i] = cur;
  return acc;
}, {});
const index1= 0;
const dis = obj1[index1] === undefined ?"" : obj1[index1]
  const obj = productId.length===0 ?"" : productId.reduce(function(acc, cur, i) {
    acc[i] = cur;
    return acc;
  }, {});
  const index= 0;
 
 const price = localStorage.getItem("totalPrice")
 console.log(price)
  var shippingId = localStorage.getItem("addressId")
  console.log(shippingId)
  let token = auth.token
  const [order,setOrder] =useState({
    product_id :obj[index],
    product_price:price,
    product_dis:dis,
    shipping_id:shippingId,
    transaction_id:transaction_id
  })
  
 const ConfirmPayment = async() =>{
    try {
         setLoading(true)
        const config = axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.post("http://localhost:8000/api/order/add-order",order,config)
        setLoading(false)
        toast.success("Order Placed Successfully")
       toast.success("Your transaction id : ",transaction_id,
      {position: "top-center",
       autoClose: 5000,
       hideProgressBar: false,
       closeOnClick: true,
       pauseOnHover: true,
       draggable: true,
       progress: undefined,
       theme: "light",})
       setShowModal(true)
       
    } catch (error) {
         console.log(error)
         setLoading(false)
    }
    }
    const paymentDecline = () =>{
      setLoading(true)
      toast.error("Payment failed")
      setLoading(false)
      navigate("/")
    }
  return (
    <>
    <div className="container  d-flex justify-content-center align-items-center" style={{width:"30%",height:"75vh"}}>
   {loading && <Loading/>  }
   
    <div className="checkout cart ">
                 <div className="check text-center">
                   <h5 className='  mb-3'>Checkout | Payment</h5>
                  
                   <h3 className='  mb-3'>{price}</h3>
                   <button className="p-2 text-dark w-100 SignUpBtn" onClick={ConfirmPayment} style={{borderRadius:'5px'}}>Confirm Payment</button> <br />
    {
      showModal === true ? <MessageBox transaction_id={transaction_id}/> : ""
    }

                   <button className="p-2 mt-2 bg-danger text-dark w-100 SignUpBtn  " onClick={paymentDecline} style={{borderRadius:'5px'}}>Decline Payment</button> <br />

                 </div>
                 </div>
    </div>
    </>
  )
 
}

export default MakePyment