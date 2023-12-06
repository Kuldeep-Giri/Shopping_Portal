const multer = require('multer')
const path = require('path')
const { v4: uuidv4 } = require("uuid");


const storage = multer.diskStorage({
    destination : function(req,file,cd){
        cd(null,'./public/images')
    },
    filename : function(req,file,cd){
        cd(null,`${uuidv4()}_${path.extname(file.originalname)}`)
    }
})

const filterFIles = (req,file,cd)=>{
    const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
    if(allowedFileTypes.includes(file.mimetype)){
        cd(null,true)
    }
    else{
        cd(null,false)
    }
}

const upload = multer({storage,filterFIles})

module.exports = upload