import React, { useState } from 'react'
import SidePanel from './sidePanel'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useAuth } from '../../context/authContext'
import Loading from '../../components/Loading'


const AddCompany = () => {
  const [auth] = useAuth()
  const token  = auth.token
  
const navigate =  useNavigate()
  const initialState = {
  
    company_name:"",
    average_rating:"",
    url:"",
    desc:''
  }
  const [addSeller,setAddSeller] = useState(initialState)
  const [loading,setLoading] = useState(false)
  const AddSeller = async(e)=>{
    e.preventDefault()
       try {
        setLoading(true)
        const config =   axios.defaults.headers.common["Authorization"] = token;
         const {data} = await axios.post("http://localhost:8000/api/seller/create-seller",addSeller,config)
         setLoading(false)
         navigate('/comapny-detailes')
       } catch (error) {
         toast.error(error)
         console.log(error)
         setLoading(false)
       }
  } 
  
  const handleChange =(e)=>{
    setAddSeller({...addSeller
      ,[e.target.name]:e.target.value})
  }

  return (
    <>
    {
      loading && <Loading/>
    }
     <div className="container-fluid">
      <div className="row">
        <div className="col-sm-3">
     <SidePanel/>
        </div>
        <div className="col-sm-9 ">
       <div className="AddCompanyform">
       <div >
        <h3 className="text-center">Add Company</h3>
       <form action="" onSubmit={AddSeller}>
            <div className="form-group mb-2">
                <label htmlFor="">Company name</label>
                <input type='text' name='company_name' value={addSeller.company_name} onChange={handleChange} className="form-control" />
            </div>
            <div className="row">
                <div className="col-6"><div className="form-group mb-2">
                <label htmlFor="">Avarage rating</label>
                <input type='number' name='average_rating' value={addSeller.average_rating} onChange={handleChange} className="form-control" />
            </div></div>
            <div className="col-6"><div className="form-group mb-2">
                <label htmlFor="">Url</label>
                <input type='text' name='url' value={addSeller.url} onChange={handleChange} className="form-control" />
            </div>
            </div>
            </div>
           <div className="form-group mb-2">
                <label htmlFor="">Description</label>
                <textarea className="form-control" name='desc' value={addSeller.desc} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>            
                </div>
               <button className="btn w-100 text-dark text-center" style={{backgroundColor:"#febd69",border:"none"}}>Add Company</button>
        </form>
       </div>
       </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default AddCompany