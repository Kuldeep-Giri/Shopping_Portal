import axios from "axios";
import { createContext,useState,useEffect,useContext, useReducer } from "react";
import { productReducer } from "../reducers/Product";



const AppContext = createContext()


const ProductProvider = ({children})=>{
   const initialState = {
    products:[],
    menFashion:[],
    SearchTerm:'',
    SearchItem:[],
    sorting_valye:"lowest",
    loading:false,
    error:null
   }

  const [state,dispatch] = useReducer(productReducer,initialState)
  

    const getproducts = async()=>{
        try {
          dispatch({type:"FETCH_PRODUCT_REQ"})
           const res = await axios.get("http://localhost:8000/api/product/all")
           const products = await res.data;
           dispatch({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
        } catch (error) {
          console.log(error)
          dispatch({ type: "FETCH_PRODUCTS_FAILURE", payload: 'Error fetching products' });
        }
      }
      
      useEffect(() => {
        getproducts()
      }, [])

   

    return(
        <AppContext.Provider value={{state,dispatch}}>
            {children}
        </AppContext.Provider>
    )
}

const useProduct = ()=> useContext(AppContext)


export {ProductProvider,useProduct}