import axios from 'axios'
import React, { Children, useState } from 'react'

const UploadImage = () => {
    const [photo,setPhoto] = useState()
  //  const [product_id,setProduct_id] = useState('')

    const prId =  localStorage.getItem("product_id")
     console.log(photo)

const handlechange = (e) =>{
  const selectedImages = Array.from(e.target.files);
  setPhoto(selectedImages);
}
    
    const handleSubmit = async() =>{
 
         try {
            const upload = new FormData()
            photo.forEach(image => {
              upload.append("photo",image)
              upload.append("product_id",prId)
            });
               
         const res = await axios.post('http://localhost:8000/api/image/upload-image',upload)
           alert("succcc")
           console.log(res.data)
         } catch (error) {
            console.log(error)
            alert(error)
         }
     
    }

    
 
  return (
    <div>
         <form action="" onSubmit={handleSubmit}>
           <div className="form-group">
           
            <input type='file'  name='photo' alt="photott" onChange={handlechange} multiple />

       
        </div>
           <button>Upload</button>
        </form> 
      


    </div>
  )
}

export default UploadImage