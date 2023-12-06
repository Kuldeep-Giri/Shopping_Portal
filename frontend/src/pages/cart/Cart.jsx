import React from 'react'
import { useAuth } from '../../context/authContext'
import { useCart } from '../../context/CartContext'
import { NavLink, useNavigate } from 'react-router-dom'

const Cart = () => {
   const [auth,setAuth] = useAuth()
    const {cartItem} = useCart()
    const {deleteItem} = useCart()
   const navigate = useNavigate();

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
       return total;
    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <>
   <div className=" container-fluid">
    
        <div className="m-4">
          {
            cartItem.length === 0 ? "" :
           <div>
            {/* <h4 className="text-center">
              {
                `You have a ${cartItem.items.filter((ele)=>ele.user_id === auth.user._id).length} items in your cart`
              }
            </h4> */}
           
            {
              filterLength.length !== 0 ? 
              
              <div className="row  ">
              <div className="col-sm-9 cart p-3 ">
              <h2 className='mx-3 mb-3'>Shopping Cart </h2>
              <hr />
            {
             filterLength.map((c)=>{
               return (
                 <div className='row '>
                  <div className="col-sm-3  ">
                  {
                    c.images.filter((ele,index)=> index==0).map((i)=>{
                      return (
                        <div className="images p-2">
                          <img src={`http://localhost:8000/images/${i.photo}`} alt="" style={{height:"200px"}}/>
                        </div>
                      )
                    })
                   }
                  </div>
                  <div className="col-sm-9 ">
                  {
         c.products?.map((p)=>{
           const {product_title,price,discount_percents,images,_id} = p;
           const discountPrice = Math.round((price)-(price*discount_percents)/100)
           return(
         <NavLink to ={`/sin-product/${_id}`} className="text-dark">
           <div className="" style={{height:"35vh"}}>
             <div className="card-body">
               <div className='row cart-details'>
 
                 <div className="col-9">
                   <div className="title p-3">
                     <h5>{product_title.substring(0,70)}...</h5>
                     <div className="prices d-flex">
                     <h3 className='text-danger '>
                         {discount_percents}%
                       </h3>
                       <h3 className=' mx-2'>
                       ₹{discountPrice}
                       </h3>
                     </div>
                     <h5 className='text-secondary'>M.R.P <del>₹{price}</del></h5>
                   </div>

                  
                   
                 </div>
               </div>
               
             </div>
           </div>
           
         </NavLink>
         
           )
         })
       }
        <div className="d-flex justify-content-end">
                     <button className="cartbtn mx-3 " onClick={()=>deleteItem(c._id)}  >Delete item</button>
                   </div>
       <hr />
                  </div>
                  
                   
                 </div>
                 
               )
             })
            }
           
            </div>
               <div className="col-md-3">
                 <div className="checkout cart ">
                 <div className="check text-center">
                   <h5 className='  mb-3'>Checkout | Payment</h5>
                   <h3 className='  mb-3'>₹{totalPrice()}</h3>
                   <NavLink to="/address-list" className="p-2 text-dark w-100 SignUpBtn  " style={{borderRadius:'5px'}}>Proceed to buy</NavLink> <br />

                 </div>
                 </div>
               </div>
           </div>
              : <div className='d-flex flex-column justify-content-center align-items-center' style={{height:"50vh"}}>
                <h2>Your Cart is Empty</h2>
                <NavLink to="/" className="text-center text-dark SignUpBtn " style={{borderRadius:'50px',width:"13%",padding:"8px 15px"}}>Shop Now</NavLink> <br />

              </div>
            }
           </div>
          }
           
        </div>
  
          </div>
       
  

    </>
  )
}

export default Cart