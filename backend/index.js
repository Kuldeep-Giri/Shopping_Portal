const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv");
const connDb = require('./config/db');
const UserRoute = require('./routes/userRoute')
const BuyerRoute = require('./routes/buyerRoute')
const sellerRoute = require('./routes/sellerRoute')
const productROute = require('./routes/productRoute')
const imageRoute = require('./routes/imageRoute')
const cartRoute = require('./routes/cartRoute')
const addressRoute = require('./routes/addressRoute')
const orderRoute = require('./routes/orderRoute')
dotenv.config();
connDb();
const app = express()

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.use(express.static("public"));


//apis
app.use('/api/user',UserRoute)
app.use('/api/buyer',BuyerRoute)
app.use('/api/seller',sellerRoute)
app.use('/api/product',productROute)
app.use('/api/image',imageRoute)
app.use('/api/cart',cartRoute)
app.use('/api/address',addressRoute)
app.use('/api/order',orderRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server Running On Port No ${process.env.PORT}`)
});