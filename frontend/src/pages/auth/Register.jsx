import React from 'react'
import {useForm} from 'react-hook-form'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
const Register = () => {

    const navigate = useNavigate()
    const {register,handleSubmit,formState:{errors}} = useForm()
  const formSubmit = async(data) =>{
    try {
        const res = await axios.post("http://localhost:8000/api/user/register",data)
        toast.success("Registration Successfully")
       navigate('/login') 
    } catch (error) {
        console.log(error)
        toast.error(error)
    }

  }
  return (
    <>
    <div className="container d-flex vh-100 justify-content-center align-items-center">
        <div className="card cardd" style={{width:"30%"}} >
        <div className="box p-3 px-4">
        <h2 className='mb-3'>Create Account</h2>
        <div className="form">
            <form action="" onSubmit={handleSubmit(formSubmit)}>
                <div className="form-group mb-2">
                    <label htmlFor="">Your name</label>
                    <input type="text" name="name" className='form-control' placeholder='First name and last name' {...register("name",{required:true})}/>
                    <span className="text-danger">{errors.name?.type==="required" && "Name is required"}</span>

                </div>
                <div className="form-group mb-2">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" className='form-control' placeholder='' {...register("email",{required:true,pattern:/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/})}/>
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
                <div className="form-group mb-2">
                    <label htmlFor="">User type</label>
                    <select class="form-select form-select-sm" name="user_type" aria-label=".form-select-sm example" {...register("user_type",{required:true})}>
                       <option>Select our type</option>
                       <option value="buyer">buyer</option>
                       <option value="seller">seller</option>
 
</select>
                 </div>
                <button className="text-center w-100 SignUpBtn mb-3">SignUp</button>
                <hr />
                <div className="login">
                    <p className="text-center">Already have an account? <NavLink to='/login'className="text-primary" >Sign in</NavLink></p>
                </div>
            </form>
        </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Register