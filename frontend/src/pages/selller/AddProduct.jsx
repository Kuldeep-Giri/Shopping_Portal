import React, { useState  , useEffect} from 'react'
import SidePanel from './sidePanel'
import axios from 'axios'
import { useAuth } from '../../context/authContext'
import { useCatAndCarrier } from '../../context/categoryAndCarrierContext'
import UploadImage from './UploadImage'
const AddProduct = () => {
 const initialState = {
  category_id:"",
  carrier_id:"",
  product_title:"",
  price:"",
  description:"",
  available_units:"",
  discount_percents:"",
  color:"",
  weight:""
 }
  const [page,setpage] = useState(0)
  const [products,setProducts] = useState(initialState)
  const [auth,setAuth] = useAuth()
  const token  = auth.token
  const {categories} = useCatAndCarrier()
  const {carrier} = useCatAndCarrier()

  const handleSubmit = async(e)=>{
    e.preventDefault()
      try {
        const config =   axios.defaults.headers.common["Authorization"] = token;
        const res = await axios.post('http://localhost:8000/api/product/add-product',products,config)
        var product_id=res.data._id;
        localStorage.setItem("product_id",product_id) 
        setpage(1)
      } catch (error) {
        alert(error)
        console.log(error)
      }
  }

 

  
  const handleChange = async(e)=>{
        setProducts({...products,[e.target.name]:e.target.value})
  }
  return (
    <>
    <div className="container-fluid">
 <div className="row">
  <div className="col-sm-3">
    <SidePanel/>
  </div>
  <div className="col-sm-9 AddCompanyform">
   {
    page === 1 ? <UploadImage/>
: 
<div className="form">
<form action="" onSubmit={handleSubmit}>
  <div className="row">
    <div className="col-12">
    <div className="form-group">
    <label htmlFor="">Product title</label>
    <input type="text" name="product_title" value={products.product_title} onChange={handleChange} className="form-control" />
  </div>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">Category</label>
    <select className='form-select' name="category_id" onChange={handleChange} id="">
      <option value="">Select Category</option>
      {
        categories.map(({category_name,_id})=>  <option key={_id} value={_id}>{category_name}</option>)
      }
    </select>
  </div>
    </div>
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">Carrier name</label>
    <select className='form-select' name="carrier_id" onChange={handleChange} id="">
    <option value="">Select carrier name</option>
      {
        carrier.map(({carrier_name,_id})=>  <option key={_id} value={_id}>{carrier_name}</option>)
      }
    </select>
  </div>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">Price</label>
    <input type="number" name="price" value={products.price} onChange={handleChange} className="form-control" />
  </div>
    </div>
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">Available units</label>
    <input type="number" name="available_units" value={products.available_units} onChange={handleChange} className="form-control" />
  </div>
    </div>
  </div>
  <div className="row">
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">Discount percentage</label>
    <input type="number" name="discount_percents" value={products.discount_percents} onChange={handleChange} className="form-control" />
  </div>
    </div>
    <div className="col-6">
    <div className="form-group">
    <label htmlFor="">color</label>
    <input type="text" name="color" value={products.color} onChange={handleChange} className="form-control" />
  </div>
    </div>
  </div>
  
  <div className="row">
    <div className="col-12 ">
    <div className="form-group mb-2">
    <label htmlFor="">Description</label>
    <textarea className="form-control" name='description' value={products.description} onChange={handleChange} id="exampleFormControlTextarea1" rows="3"></textarea>            

  </div>
    </div>
    
  
  </div>
  <button className="btn  w-100 text-dark text-center" style={{backgroundColor:"#febd69",border:"none"}}>Add Product</button>

</form>
</div>
}
  </div>
 </div>
    </div>
    </>
  )
}

export default AddProduct