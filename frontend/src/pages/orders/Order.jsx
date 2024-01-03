import React from 'react'
import { UseOrders } from '../../context/AddressAndOrderContext'
import moment from 'moment'
import { NavLink } from 'react-router-dom'

const Order = () => {
  const {state} = UseOrders()
  console.log(state.orders)
  return (
    <>
    <div className="container">
        <div className="order mt-5">
           {
            state.orders.map(({_id,product_price,image,orderProducts,date,order_id,address,status})=>{
              return (
                <div key={_id}>
                   <div className="card mt-2">
               <div className="a-box justify-content-center d-flex justify-content-between "  >
                <div className='d-flex justify-content-start m-1'>
                    <div className='px-1' >
                    <p >ORDERS PLACED <br />
                    {moment(date).format(' Do MMMM YYYY')}
                        </p>
                </div>
                <div className='px-5'>
                <p >PRICE <br />
              {product_price}</p>
                </div>
                <div className='px-4'>
                <p className='cont' >SHIP TO <br />
                       
                        
                           {
                            address.map((ele)=>{
                              return(
                                <>
                               {ele.street1} <span className='conta'>  {ele.street2}, {ele.city}, {ele.state}, {ele.pincode},{ele.country}</span>
                                </>
                              )
                            })
                            }
                        
                         </p>
                </div>
                </div>
                <div className='mx-2'>
                   #orderId : {order_id}
                </div>
               
               </div>
             <div className="order-product">
                <div className="row">
                  <div className="col-2">
                   
                    {
                      image.filter((f,ind)=> ind <1 ).map((i)=>{
                        return (
                          <div className="image p-3">
                          <img src={`http://localhost:8000/images/${i.photo}`} alt="" className='img-fluid' style={{height:"150px"}}/>
                         </div>
                        )
                      })
                    }
                  </div>
                  <div className="col-8 p-3">
                    
                    {
                        orderProducts.map((p)=>{
                          return (
                    <div className="details">
                      <h4>{p.product_title.substring(0,100)}...</h4>
                      <NavLink to={`/sin-product/${p._id}`} className='tractOrderBtn mb-2 mt-2 bg-warning' style={{width:"20%"}}>View Product</NavLink>
                      <button className='tractOrderBtn bg-danger text-white' style={{width:"20%"}}>Cancel Order</button>
                     
                    </div>
                    
                          )
                        })
                    }
                  </div>
                <div className="col-2">
                  <div className="cont mt-5 mx-3">
                    <button className='tractOrderBtn' >Track Order</button>
                    <div className="conta">{status}</div>
                  </div>
                </div>
                </div>
             </div>
            </div>
                </div>
              )
            })
           }
        </div>
    </div>
    </>
  )
}

export default Order