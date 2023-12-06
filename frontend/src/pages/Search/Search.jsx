import React, { useEffect, useState } from 'react'
import {FaStarHalfStroke} from "react-icons/fa6"
import { NavLink } from 'react-router-dom'
import { priceData } from '../../price';
import { useProduct } from '../../context/ProductContext';

const Search = () => {
 
    const {state:{SearchItem}} = useProduct();
  const [price,setPrice] = useState()
  const [hideDiv,sethideDiv]= useState(false)
    const handleChange =  (id) =>{

         
    }
  
    console.log(price)
    console.log(SearchItem)
  return (
    <>
   <div className="container-fluid">
    <div className="container-items mt-3">
      <div className="row">
      <div className="col-sm-3">
      <div className="price">
        <h4><strong>Price's</strong></h4>
        {
          priceData.map((ele)=>{
            return(
              <div className="form-check">
             <div>
  <input  onChange={(e)=>e.target.value}  className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" defaultValue="option1"  />
  <label className="form-check-label" htmlFor="exampleRadios1">
  {ele.price}
  </label>
</div>

            </div>
            )
          })
        }
      
    </div>
  <button className="text-danger" onClick={()=>sethideDiv(false)}>Clear filter</button>
      </div>
      <div className="col-sm-9">
      {
        hideDiv === false ? <div className="row">
           
          
        {
 SearchItem.map(({product_title,price,_id,images,discount_percents})=>{
   const discountPrice = Math.round((price)-(price*discount_percents)/100)
         return(
           
           <div className="col-sm-4 col-6" key={_id}>
           <div className="card p-3 d-flex justify-content-center align-items-center" style={{borderRadius:"0px"}}>
           <div className="items">
           <NavLink className='text-dark' to={`/sin-product/${_id}`}>
               {
                 images.filter((ele,index)=>index<1).map(({photo})=>{
                   return (
                     <img className='img-fluid'  src={`http://localhost:8000/images/${photo}`} alt="" style={{width:"100%",height:"40vh"}}/>
                   )
                 })
               }

               <h5 className='mt-2'>{product_title.substring(0,45)}...</h5>
<div className='text-center mb-3'><FaStarHalfStroke/> <FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></div>
<div className='d-flex justify-content-between'>
<h5 className="text-center mx-2"><strong className="text-danger fs-4">-{discount_percents}%</strong> ₹{discountPrice}</h5>
<p className="text-center fs-5 text-secondary">M.R.P <del>₹{price}</del></p>
</div>
</NavLink>
<button className=' w-100' style={{backgroundColor:"#FFD814",border:"none",padding:"3px",borderRadius:"7px"}}>Add to Cart</button>

           </div>
           </div>
       </div>
           
         )})
} 
   </div> : 
    <div className="row">
           
          
    {
SearchItem.map(({product_title,price,_id,images,discount_percents})=>{
const discountPrice = Math.round((price)-(price*discount_percents)/100)
     return(
       
       <div className="col-sm-4 col-6" key={_id}>
       <div className="card p-3 d-flex justify-content-center align-items-center" style={{borderRadius:"0px"}}>
       <div className="items">
       <NavLink className='text-dark' to={`/sin-product/${_id}`}>
           {
             images.filter((ele,index)=>index<1).map(({photo})=>{
               return (
                 <img className='img-fluid'  src={`http://localhost:8000/images/${photo}`} alt="" style={{width:"100%",height:"40vh"}}/>
               )
             })
           }

           <h5 className='mt-2'>{product_title.substring(0,45)}...</h5>
<div className='text-center mb-3'><FaStarHalfStroke/> <FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></div>
<div className='d-flex justify-content-between'>
<h5 className="text-center mx-2"><strong className="text-danger fs-4">-{discount_percents}%</strong> ₹{discountPrice}</h5>
<p className="text-center fs-5 text-secondary">M.R.P <del>₹{price}</del></p>
</div>
</NavLink>
<button className=' w-100' style={{backgroundColor:"#FFD814",border:"none",padding:"3px",borderRadius:"7px"}}>Add to Cart</button>

       </div>
       </div>
   </div>
       
     )})
} 
</div>
   }
      </div>
        
    </div>
</div>
</div>

    </>
  )
}

export default Search