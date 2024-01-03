import axios from "axios";
import { createContext,useState,useEffect,useContext } from "react";


const AppContext = createContext()


const CatAndCarirProvider = ({children})=>{
    const [categories,setCategories] = useState([])
    const [carrier,setCarrier] = useState([])
    const [category,setCategory] = useState([])
   

    const getCategory = async()=>{
        try {
           const {data} = await axios.get("http://localhost:8000/api/seller/cat")
           setCategories(data)
        
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        getCategory()
      }, [])

      const getCarriers = async()=>{
        try {
          const {data} = await axios.get("http://localhost:8000/api/seller/carriers")
          setCarrier(data)
      
        } catch (error) {
          console.log(error)
        }
      }
    
    
      useEffect(() => {
        getCarriers()
      }, [])
      const getCat = async()=>{
        try {
         const {data} = await axios.get(`http://localhost:8000/api/product/query/${window.location.search}`)
         setCategory(data)
           
        } catch (error) {
         
        }
       }
       
      
         useEffect(()=>{
          getCat()
         },[])
       
      
     
    
    return(
        <AppContext.Provider value={{categories,carrier,category}}>
            {children}
        </AppContext.Provider>
    )
}

const useCatAndCarrier = ()=> useContext(AppContext)


export {CatAndCarirProvider,useCatAndCarrier}