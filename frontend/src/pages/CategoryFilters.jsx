import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {FaStarHalfStroke} from "react-icons/fa6"
import {useImage} from '../context/imageContext'
const CategoryFilters = () => {
    const [category,setCategory] = useState([])
    const [filterImage,setFilterImage] = useState()

  const getCat = async()=>{
    const {data} = await axios.get(`http://localhost:8000/api/product/query/${window.location.search}`)
    setCategory(data)
  }
  

    useEffect(()=>{
        getCat()
    },[])
  
    const {images} = useImage();
 const filterImg = async()=>{
    let filter = images.filter((item)=>{
      item.product_id=category._id;




    })
    setFilterImage(filter)
    console.log(filter)
  
 }

 useEffect(()=>{
  filterImg()
 },[])


  return (
    <>
    
<div className="container-fluid">
    <div className="container-items mt-3">
      <div className="row">
      <div className="col-sm-3">
        hello
      </div>
      <div className="col-sm-9">
      <div className="row">
           
          
           {
    category.map(({product_title,price,_id})=>{
            return(
              <>
              <div className="col-sm-4" key={_id}>
              <div className="card p-3 d-flex justify-content-center align-items-center" style={{borderRadius:"0px"}}>
              <div className="items">
                <NavLink to={`/sin-product/${_id}`} className="text-dark">
                <img className='img-fluid' src="https://m.media-amazon.com/images/I/613-9R86FML._AC_UL320_.jpg" alt="" style={{width:"100%",height:"55vh"}}/>

<h5 className='mt-2'>{product_title.substring(0,45)}...</h5>
<div className='text-center mb-3'><FaStarHalfStroke/> <FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/><FaStarHalfStroke/></div>
<h5 className="text-center">{price}</h5>
                </NavLink>
  <button className=' w-100' style={{backgroundColor:"#FFD814",border:"none",padding:"3px",borderRadius:"7px"}}>Add to Cart</button>

              </div>
              </div>
          </div>
              </>
            )})
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