import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import AddAddressModal from './AddAddressModal'
import axios from 'axios'
import { useAuth } from '../../context/authContext'
import { useCart } from '../../context/CartContext'

const AddressList = () => {
    const [showModal,setShowModal] = useState(false)
    const [auth] = useAuth();
    const [getList,setGetList] = useState([])
    const [add,setAdd] = useState()
    const {cartItem} = useCart()
    const filterLength = cartItem.length === 0 ? "" : cartItem.items.filter((f)=>f.user_id===auth.user._id)

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
       localStorage.setItem("totalPrice",total)
        return total;
     } catch (error) {
       console.log(error)
     }
   }

    const getAddressList = async()=>{
        try {
            const getdata = localStorage.getItem("auth")
            if(getdata){
              var sellerData = JSON.parse(getdata)
            }
            const token = sellerData.token 
            const res = await axios.get("http://localhost:8000/api/address/get-address",{
                headers: {Authorization:token}
            })
            setGetList(res.data.result)  
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{getAddressList()},[])


const handleAddress = (id)=>{
 localStorage.setItem("addressId",id)
}

  return (
    <div>
        <div className="container">
           <div className="row ">
            <div className="col-sm-9 mt-3">
            <div className="addressList  ">
                <h3 className="text-danger font-weight-bold">Select a delivery Address</h3>
                <div className="card">
                    <div className='mx-3 mt-2' >
                        <h4 style={{margin:"0px",padding:"0px"}}>Your addresses</h4>
                        <hr  style={{margin:"0px",padding:"0px"}}/>
                    </div>
                    
                <div className="addressList p-3">

                

                {
    getList.length === 0 ? "" : <>
    
    {
    getList?.map((ele)=>{
      
        return(
            <div className="form-check mt-3">
  <input className="form-check-input" type="radio" onClick={()=>handleAddress(ele._id)} />
  <label className="form-check-label" htmlFor="flexRadioDefault1">
  {ele.street1}, {ele.street2}, {ele.city}, {ele.state}, {ele.pincode},{ele.country}
  </label>
  <hr />
</div>
        )
    })
}
    </>
}

                </div>
                </div>
                <div className="add-address p-3 fs-5">
    {
        showModal == false ?<NavLink onClick={()=>setShowModal(true)} className="text-primary" >+Add Address</NavLink>
        :
        <AddAddressModal setShowModal={setShowModal}/>
    }
    
    
</div>
            </div>
            </div>
            <div className="col-sm-3 mt-5">
            <div className="checkout cart ">
                 <div className="check text-center">
                   <h5 className='  mb-3'>Checkout | Payment</h5>
                  
                   <h3 className='  mb-3'>{totalPrice()}</h3>
                   <NavLink to="/makepayment" className="p-2 text-dark w-100 SignUpBtn  " style={{borderRadius:'5px'}}>Use this address</NavLink> <br />

                 </div>
                 </div>
            </div>
           </div>
        </div>
    </div>
  )
}

export default AddressList