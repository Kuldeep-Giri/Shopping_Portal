import { useState, useContext, createContext, useEffect } from "react";
import axios from 'axios'
import { toast } from "react-toastify";
const AppContext = createContext();
const CartProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);
  const [ product_id,setProduct_id] = useState()
  const [cartItem,setCartItem] = useState([])
  var tokens
  useEffect(() => {
    const data = localStorage.getItem("auth")
    if(data){
        const parseData = JSON.parse(data)
        setAuth({
          token:parseData.token
      })
      
    }
  }, [])

  const token = auth.token;

  const addtocart = async(id) =>{
    try {
      
       const config = axios.defaults.headers.common["Authorization"] = token;
       const res = await axios.post("http://localhost:8000/api/cart/add-to-cart",
       {product_id:id},config)
       toast.success("Item Added to the cart")
       getCartItems()
    } catch (error) {
       toast.success(error)
    }
  }

  const getCartItems = async() =>{
    try {
      const getdata = localStorage.getItem("auth")
      if(getdata){
        var sellerData = JSON.parse(getdata)
      }
      const tokens = sellerData.token 
       const res = await axios.get("http://localhost:8000/api/cart/cart-items",{
        headers: {Authorization:tokens}
      })
       setCartItem(res.data);
    } catch (error) {
       toast.success(error)
       console.log(error)
    }
  }

  useEffect(() => {
  getCartItems()
  }, [])
  
  const deleteItem = async(id) =>{
    try {
  
       const res = await axios.delete(`http://localhost:8000/api/cart/delete-items/${id}`)
       toast.success(res.data.msg);
       getCartItems();
    } catch (error) {
       toast.success(error)
       console.log(error)
    }
  }


  return (
    <AppContext.Provider value={{addtocart,cartItem,deleteItem}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useCart = () => useContext(AppContext);

export { useCart, CartProvider };