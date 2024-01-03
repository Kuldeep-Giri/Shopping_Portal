import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaStarHalfStroke} from "react-icons/fa6"
import {useImage} from '../context/imageContext'
import { useCatAndCarrier } from '../context/categoryAndCarrierContext'
import { useAuth } from '../context/authContext'
import { useCart } from '../context/CartContext'
import { priceData } from '../price'
const CategoryFilters = () => {
   const {category} = useCatAndCarrier()
   const [auth] = useAuth();
   const { addtocart } = useCart()
 
   const postcart = (id) => {
    try {
       addtocart(id)
    } catch (error) {
       console.log(error)
    }
 }
 const [filterPrice, setFilter] = useState()
 const [hiddiv, sethidediv] = useState(false)
 const filterprice = (id) => {
    if (id == 1) {
       const price = category.filter((ele) => {
          const { product_title, price, discount_percents, images, _id } = ele;
          const discountPrice = Math.round((price) - (price * discount_percents) / 100)
          return discountPrice > 100 && discountPrice < 1000
       }
       )
       setFilter(price)
    }
    else if (id == 2) {
       const price = category.filter((ele) => {
          const { product_title, price, discount_percents, images, _id } = ele;
          const discountPrice = Math.round((price) - (price * discount_percents) / 100)
          return discountPrice > 1000 && discountPrice < 2000
       }
       )
       setFilter(price)
    }

    else if (id == 3) {
       const price = category.filter((ele) => {
          const { product_title, price, discount_percents, images, _id } = ele;
          const discountPrice = Math.round((price) - (price * discount_percents) / 100)
          return discountPrice > 2000 && discountPrice < 4000
       }
       )
       setFilter(price)
    }


    else if (id == 4) {
       const price = category.filter((ele) => {
          const { product_title, price, discount_percents, images, _id } = ele;
          const discountPrice = Math.round((price) - (price * discount_percents) / 100)
          return discountPrice > 4000
       }
       )
       setFilter(price)
    }
 }
  return (
    <>
    
<div className="container-fluid">
    <div className="container-items mt-3">
      <div className="row">
      <div className="col-sm-2">
                  <h3 className='mb-2'>Filter product's</h3>
                  <h4>price's</h4>
                  {
                     priceData.map((ele) => {
                        return (
                           <div className="form-check">

                              <div>

                                 <input onClick={() => { filterprice(ele.id), sethidediv(true) }} className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1" />
                                 <label className="form-check-label" htmlFor="exampleRadios1">
                                    {ele.price}
                                 </label>
                              </div>

                           </div>
                        )
                     })
                  }
                  <button className="btn" onClick={() => sethidediv(false)}>clear filter</button>
               </div>
      <div className="col-sm-10">
      <div className="row">
           
         {
         hiddiv === false ? 
         <>
          
          {
    category.map((p)=>{
      const { product_title, price, discount_percents, images, _id } = p;
      const discountPrice = Math.round((price) - (price * discount_percents) / 100)
      return (


         <div className=" col-sm-3 col-6 mt-2" key={_id}>
            <div className="card p-2" style={{ height: "55vh", borderRadius: "0px" }}>
               <NavLink className='text-dark' to={`/sin-product/${_id}`}>
                  {
                     images.filter((ele, index) => index == 0).map(({ photo, id }) => {
                        return (

                           <div className="images" key={_id}>
                              <img src={`http://localhost:8000/images/${photo}`} style={{ height: "30vh" }} alt="" className='img-fluid' />
                           </div>

                        )
                     })
                  }
                  <div className="title text-center mt-1">
                   <h5>{product_title.substring(0, 30)}</h5>
                  </div>
                  <div className="price d-flex justify-content-start mt-1">
                     <h5 className='mx-3'>₹{discountPrice}</h5>
                    <> <h5 className='text-danger'>{discount_percents}%</h5>M.R.P <del className='text-secondary'>₹{price}</del></>
                  </div>
               </NavLink>
               <div className="btnt text-center mt-2">

                  {
                     auth?.token ? <button className="text-center w-100 SignUpBtn" style={{ borderRadius: '50px' }}
                        onClick={() => postcart(_id)}
                     >Add to Cart</button> :
                        <button className="text-center w-100 SignUpBtn" style={{ borderRadius: '50px' }}

                        ><NavLink onClick={() => toast.success("Please login")} to='/login' className=" text-dark">Add to Cart</NavLink></button>
                  }
                  <br />

               </div>
            </div>
         </div>

      )
   })
}
         </>:
         <>
           {
    filterPrice.map((p)=>{
      const { product_title, price, discount_percents, images, _id } = p;
      const discountPrice = Math.round((price) - (price * discount_percents) / 100)
      return (


         <div className=" col-sm-3 col-6 mt-2" key={_id}>
            <div className="card p-2" style={{ height: "55vh", borderRadius: "0px" }}>
               <NavLink className='text-dark' to={`/sin-product/${_id}`}>
                  {
                     images.filter((ele, index) => index == 0).map(({ photo, id }) => {
                        return (

                           <div className="images" key={_id}>
                              <img src={`http://localhost:8000/images/${photo}`} style={{ height: "30vh" }} alt="" className='img-fluid' />
                           </div>

                        )
                     })
                  }
                  <div className="title text-center mt-1">
                   <h5>{product_title.substring(0, 30)}</h5>
                  </div>
                  <div className="price d-flex justify-content-start mt-1">
                     <h5 className='mx-3'>₹{discountPrice}</h5>
                    <> <h5 className='text-danger'>{discount_percents}%</h5>M.R.P <del className='text-secondary'>₹{price}</del></>
                  </div>
               </NavLink>
               <div className="btnt text-center mt-2">

                  {
                     auth?.token ? <button className="text-center w-100 SignUpBtn" style={{ borderRadius: '50px' }}
                        onClick={() => postcart(_id)}
                     >Add to Cart</button> :
                        <button className="text-center w-100 SignUpBtn" style={{ borderRadius: '50px' }}

                        ><NavLink onClick={() => toast.success("Please login")} to='/login' className=" text-dark">Add to Cart</NavLink></button>
                  }
                  <br />

               </div>
            </div>
         </div>

      )
   })
}
         </>
         
         }
      </div>
      </div>
        
    </div>
</div>
</div>
    </>
  )
}

export default CategoryFilters