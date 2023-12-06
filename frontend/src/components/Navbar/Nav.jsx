import React, { useState } from 'react'
import './nav.css'
import { FaBars,FaWindowClose,FaUserCircle } from "react-icons/fa";
import { FaGreaterThan,FaLocationDot,FaXmark } from "react-icons/fa6";
import {NavLink} from 'react-router-dom'
import { useCatAndCarrier } from '../../context/categoryAndCarrierContext';
import { useAuth } from '../../context/authContext';

const Nav = () => {
    const [toggel,setToggel] = useState(false)
    const {categories} = useCatAndCarrier()  
   const [auth] = useAuth()
    return (
    <>
    <div className="container-fluid navbar ">
      <div className="left-nav  ">
        <ul>
        <li onClick={()=>setToggel((pre)=>!pre )}>
        <span>
          <FaBars className='fs-4'/> 
            </span>
        </li>
        <li className='hide'>Sell</li>
        <li className='hide'>Best Seller's</li>
        <li className='hide'>Today's Deals</li>
        <li className='hide'>Mobiles</li>
        <li className='hide'>Customer Service</li>
        <li className='hide'>Electronics</li>
        <li className='hide'>Prime</li>
        <li className='hide'>New Release</li>
        
        </ul>
      </div>
      <div className="right-nav ">
       <img  src="images/navlogo.jpg" alt="" className="img-fluid hide" />
{
  toggel ?       <h1 className='fs-2 closeNAv ' onClick={()=>setToggel(false)}><FaXmark className=''/></h1>
  :        ""

}
      </div>
     
    </div>
    <div>
    {
        toggel === true ? <>

         <div className="fullSideBar">
         <div className="sidebar">

<div className="container singin ">
 {
  auth?.token ? <h3> <FaUserCircle/>  Hello, {auth?.user?.name} </h3> :<h3> <FaUserCircle/> Hello, SignIn</h3>
 }
</div>
<div className="orders">
  Orders
</div>
<div className="showcat">
<h4 className='m-3'>Shop By Category</h4>
<hr />

{
  categories.map(({category_name,_id})=>{
    return (
      <div className="showCatData" key={_id}>
      <NavLink onClick={()=>setToggel(false)} className="text-dark" to={`/cat-product?category_id=${_id}`}>{category_name}</NavLink>
      <p><FaGreaterThan/></p>
      </div>
    )
  })
}
</div>
</div>

         </div>
        </> : ""
    }
   </div>
  
    </>
  )
}

export default Nav