import axios from "axios";
import { createContext,useState,useEffect,useContext, useReducer } from "react";
import { productReducer } from "../reducers/Product";
import { orderReducer } from "../reducers/OrdersAddress";



const AppContext = createContext()


const OrderProvider = ({children})=>{
   const initialState = {
    orders:[],
    loading:false,
    error:null
   }

  const [state,dispatch] = useReducer(orderReducer,initialState)
  

    const getOrders = async()=>{
     
        try {
          const getdata = localStorage.getItem("auth")
          if(getdata){
            var sellerData = JSON.parse(getdata)
          }
          const token = sellerData.token 
          dispatch({type:"FETCH_ORDERS_REQ"})
           const res = await axios.get("http://localhost:8000/api/order/get-order",{
            headers:{Authorization:token}
           })
           const orders = await res.data;
           dispatch({ type: "FETCH_ORDERS_SUCCESS", payload: orders });
           
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_ORDERS_FAILURE", payload: 'Error fetching ORDERS' });
        }
      }
      
      useEffect(() => {
        getOrders()
      }, [])

   

    return(
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

const UseOrders = ()=> useContext(AppContext)


export {OrderProvider,UseOrders}