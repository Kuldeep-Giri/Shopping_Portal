import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../context/authContext'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'
import { useCart } from '../../context/CartContext'
import { UseOrders } from '../../context/AddressAndOrderContext'
const Login = () => {

    const [auth,setAuth] =useAuth()
    const {getItem} = useCart()
    const [loding,setLoading] = useState(false)
    const {state} = UseOrders()

    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
  const formSubmit = async(data) =>{
    try {
       setLoading(true);
        const res = await axios.post("http://localhost:8000/api/user/login",data)
        toast.success('login success')
        setAuth({
         ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        if(res.data.user.user_type === "seller") {
            navigate('/seller-homepage')
         }
         else{
            navigate('/')
            window.location.reload();
         }
         getItem();
         setLoading(false);
        
       
    } catch (error) {
        toast.error("Email/passowrd invalid")
        setLoading(false);
    }
  }
  return (
    <>
    {
      loding && <Loading/>
    }
    <div className="container d-flex vh-100 flex-column justify-content-center align-items-center">
        <div className="card cardd" style={{width:"30%"}} >
        <div className="box p-3 px-4">
        <h2 className='mb-3'>Sign in</h2>
        <div className="form">
            <form action="" onSubmit={handleSubmit(formSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"  className='form-control' placeholder='Enter email' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})} />
                    <span className="text-danger">
                {errors.email?.type==="required" && "Email is required"}
                {errors.email?.type==="pattern" && "Please enter valid format"}
                </span>
                </div>
                <div className="form-group mb-2">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password" className='form-control' placeholder='At least 6 characters'  {...register("password",{required:true,minLength:6,maxLength:20})}/>
                 <span className="text-danger">
                 {errors.password?.type==="required" && "Password is required"}
                {errors.password?.type==="minLength" && "Password must be 6 character"}
                {errors.password?.type==="maxLength" && "Password is not valid"}
                 </span>
                </div>
                <button className="text-center w-100 SignUpBtn mb-3 mt-2">SignIn</button>
               
            </form>
        </div>
        </div>
        
        </div>
        <div className=" text-center a-divider break mb-3 mt-4"><h5 aria-level="5">New to Amazon?</h5></div>
                <div className="login">
                <NavLink className="text-center w-100  createBtn  mb-3" to='/register' style={{color:"#0f1111"}}>Create New Account</NavLink>
                 </div>
    </div>
    </>
  )
}

export default Login