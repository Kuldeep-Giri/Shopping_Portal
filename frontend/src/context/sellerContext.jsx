import axios from "axios";
import { createContext, useContext, useState ,useEffect} from "react";

const sellerContext = createContext()


const SellerProvider = ({children})=>{
  

  const [seller, setSeller] = useState([])
  const fetch = async()=>{
try {
  const getdata = localStorage.getItem("auth")
  if(getdata){
    var sellerData = JSON.parse(getdata)
  }
  const token = sellerData.token 
      
  const res = await axios.get("http://localhost:8000/api/seller/company",{
    headers: {Authorization:token}
  })
  
  setSeller(res.data.findCompany)
} catch (error) {
    console.log(error)
}
  }
   useEffect(()=>{
    fetch()
   },[])

   return (
    <sellerContext.Provider value={[seller]}>
        {children}
    </sellerContext.Provider>
   )
}

const useSeller =()=> useContext(sellerContext)

export {SellerProvider,useSeller}