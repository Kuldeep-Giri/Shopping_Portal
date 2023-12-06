import React, { useState,useEffect } from 'react'
import '../SingleProduct/sinproduct.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
const SinProduct = () => {

       const [singlePro,setSinglePro] = useState({})
       const discountPrice = Math.round((singlePro.price)-(singlePro.price*singlePro.discount_percents)/100)
       const {id} = useParams();
       const {addtocart} = useCart()
       const getSingleProduct = async()=>{
           try {
              const {data} = await axios.get(`http://localhost:8000/api/product/sin/${id}`)
              setSinglePro(data)
           } catch (error) {
             console.log(error)
           }
       }

      useEffect(() => {
         getSingleProduct()
     }, [])

 const img = Object.keys(singlePro).length === 0 ?"":  singlePro.images[0]

const handleImage = (id)=>{
  const fff = singlePro.images.filter((ele,index)=> id === ele._id) 
   setChangeImg(fff)
}

   const [changeImg,setChangeImg] = useState()


 
  return (
    <>
 

    <div className="container-fluid mt-5 ">
        <div className="row ">
        <div className="col-sm-6 d-flex justify-content-center" >
        
        <div className='mx-3'>
        {
                singlePro?.images?.map(({photo,_id})=>{
                    return (
                      <div key={_id}>
                        <img  src={`http://localhost:8000/images/${photo}`} onClick={()=>handleImage(_id)}  alt="" style={{cursor:"pointer",width:"100%",height:"70px"}} className='img-fluid mt-1' />
                      </div>

                    )
                })
              }
        </div>
         
          
    <div>
    {
        changeImg == undefined ?          
      
        <img src={`http://localhost:8000/images/${img.photo }`} alt="" className='img-fluid' style={{height:"450px"}} /> 
        : <>
         {
          changeImg.map(({photo,_id})=>{
            return (
            
        <img src={`http://localhost:8000/images/${photo}`} alt="" className='img-fluid' style={{height:"450px"}} /> 
     
            )
          })
         }
         </>
      }
    </div>
          
     
         </div>   
         
            <div className="col-sm-6">
                <div className="title">
                <h2>{singlePro.product_title}</h2>
                 <p>Rating</p>
                </div>
                <hr />
                <div className="price">
                    <h3><span className="text-danger fs-3">-{singlePro.discount_percents}%</span> ₹{discountPrice}</h3>
                    <p className="text-secondary">M.R.P <del>₹{singlePro.price}</del></p>
                    <p>inclusive all taxes</p>
                </div>
                <hr />
                <div className="desc">
                    <p> <strong>Color:</strong> {singlePro.color}</p>
                    <p> <strong>Product Details:</strong> <br />
                    {singlePro.description}
                    </p>

                </div>

                <div className=" d-flex flex-column justify-content-center align-items-center mt-3" >
                  
                    <button className="text-center w-50 SignUpBtn p-2  " onClick={()=>addtocart(singlePro._id)} style={{borderRadius:'50px'}}>Add to Cart</button> <br />
                    <button className="text-center w-50 SignUpBtn p-2 " style={{borderRadius:'50px',backgroundColor:"#ff9000"}} >Buy Now</button>

                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default SinProduct