import React from 'react'
import './header.css'
import { FaLocationDot } from "react-icons/fa6";
import { BsCart4,BsSearch } from "react-icons/bs";
import { useAuth } from '../context/authContext';
import { NavLink, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
import {Badge} from 'react-bootstrap'
import { useCart } from '../context/CartContext';
import { useProduct } from '../context/ProductContext';
import { BsBagFill } from "react-icons/bs";


const Header = () => {
  const [auth,setAuth] = useAuth()
  const {cartItem} = useCart();
  const {state,dispatch} = useProduct()

  
  const handleLogOut = () =>{
    localStorage.removeItem("auth")
   setAuth({
    user:null,
    token:""
   })
  
  }
  

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.get(`http://localhost:8000/api/product/search?q=${state.SearchTerm}`);
      dispatch({ type: "SET_SEARCH_RESULT", payload: res.data });
      navigate(`/search?q=${state.SearchTerm}`)
    } catch (error) {
      console.log('Error fetching search results:', error);
    }
    };
   console.log(state.SearchItem)
  return (
    <>
    
<header className="container-fluid hide">
  <div className="nav-bar">
    <div className="nav-belt">
      <div className="nav-left">
        <div className="nav-logo">
          <NavLink to='/'  className='mx-2'><img src="images/Capture2.JPG" alt="" className="img-fluid" style={{width:"100%",height:"70px"}}/></NavLink>
          <NavLink >
            <div><FaLocationDot/></div>
            <div style={{fontSize:"12px"}} >delivering to gurugram 120001 <br /> <strong>Update location</strong></div>
          </NavLink>
        </div>
      </div>
      <div className="nav-fill">
        <div className="nav-search">
          <form  className="nav-search-bar-form"  onSubmit={handleSubmit}>
            <div className="nav-left">
              <NavLink >ALL</NavLink>
            </div>
            <div className="nav-fill">
              <input type="text" placeholder='Search Our Product' onChange={(e) =>
          dispatch({
            type: "SET_SEARCH_TERM",
            payload: e.target.value,
          })
        } />
            </div>
            <div className="nav-right">
              <button type="submit" className=' fs-4 text-dark' ><BsSearch/></button>
            </div>
          </form>
        </div>
      </div>
      <div className="nav-right">
        <div className="nav-tools">
        
          
          {
            auth?.user ? <NavLink>
            <NavDropdown title={`Hello,${auth?.user?.name}`} className='text-white ' >
              <NavDropdown.Item ><NavLink to='/login' className="text-dark" onClick={handleLogOut}>SignOut</NavLink></NavDropdown.Item>
            </NavDropdown>
            </NavLink> :
             <NavDropdown.Item ><NavLink to="/login">Hello,Sign in</NavLink></NavDropdown.Item>
          }
          <NavLink className="" to="/order-list"><span className='fs-6'>Return </span> 
          <strong>&Orders</strong></NavLink>
          <NavLink  style={{fontSize:"32px"}} to="/cart">
          <p> <BsBagFill className='text-warning' /><sup className='text-danger'><strong>{auth?.token ? cartItem.length === 0 ? "" : cartItem.items.filter((f)=>f.user_id===auth.user._id).length : ""}</strong></sup></p>
          </NavLink>
        
        </div>
      </div>
    </div>
    
  </div>
</header>

 <div className='container-fluid shows'>
 
  <div className="secondHeader ">
    <div className="uper d-flex justify-content-between ">
      <div>
      <NavLink to='/'  className='mx-2'><img src="images/Capture2.JPG" alt="" className="img-fluid" style={{width:"100%",height:"50px"}}/></NavLink>
      </div>
      <div>
      <NavLink  style={{fontSize:"24px"}} to="/cart">
           <p> <BsBagFill className='text-warning mt-2' /><sup className='text-danger'><strong>{auth?.token ? cartItem.length === 0 ? "" : cartItem.items.filter((f)=>f.user_id===auth.user._id).length : ""}</strong></sup></p>
              
          </NavLink>
      </div>
      
    </div>
  
  </div>
  <div className="secondNav">
  <form  className="nav-search-bar-form"  onSubmit={handleSubmit}>
            <div className="nav-left">
              <NavLink >ALL</NavLink>
            </div>
            <div className="nav-fill">
              <input type="text" placeholder='Search Our Product' onChange={(e) =>
          dispatch({
            type: "SET_SEARCH_TERM",
            payload: e.target.value,
          })
        }/>
            </div>
            <div className="nav-right">
              <button type="submit" className=' fs-4 text-dark' ><BsSearch/></button>
            </div>
          </form>
      </div>
 </div>

    </>
  )
}

export default Header