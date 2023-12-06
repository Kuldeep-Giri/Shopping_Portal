const Image = require("../models/ProductImageModel")
const mongoose = require('mongoose')
const Product = require("../models/productModel")

const uploadImage = async(req,res) =>{


try{
  const images = req.files.map(file => ({
    photo: file.filename,
    product_id:req.body.product_id
  }));

  const savedImages = await Image.insertMany(images);
 
  res.status(201).send({
    msg:"Uploaded Successfully",
    savedImages
  })
  console.log(savedImages)
 


}
 catch (error) {
        console.log(error)
    }
}






const join = async(req,res)=>{
  try {
    const products = await Image.find({}).populate('product_id');
    res.json(products)
  } catch (error) {
    console.log(error)
  }
}

const getJoin = async(req,res)=>{
  try {
    const products = await Image.findById(req.params.id).populate('product_id');
    res.json(products)
  } catch (error) {
    console.log(error)
  }
}



// const photo = []

// if(Array.isArray(req.files.photo)){
//  for (let i = 0; i < req.files.photo.length; i++) {
//    photo.push(req.files.photo[i])
   
//  }

// }else{
//  photo.push(req.files.images)
// }
// await Image({
// product_id : req.body.product_id,
// photo:photo
// })
// res.send("dhu")

const getImage = async(req,res) =>{
   const images = await Image.find({})
   res.json(images)
}

module.exports = {uploadImage,getImage,join,getJoin}