import axios from "axios";
import { createContext,useState,useEffect,useContext } from "react";


const AppContext = createContext()


const ImageProvider = ({children})=>{
    const [images,setImages] = useState([])

   

    const getImage = async()=>{
        try {
           const {data} = await axios.get("http://localhost:8000/api/image/images")
           setImages(data)
          
        
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        getImage()
      }, [])

      

    return(
        <AppContext.Provider value={{images}}>
            {children}
        </AppContext.Provider>
    )
}

const useImage = ()=> useContext(AppContext)


export {ImageProvider,useImage}