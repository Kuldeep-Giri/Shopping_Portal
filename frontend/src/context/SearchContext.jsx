import { createContext, useContext, useState ,useEffect} from "react";


const AppContext = createContext()


const SearchProvider = ({children})=>{
    const [auth,setAuth]  = useState({
        searchTerm : "" ,
        result : []
    });



 return (
    <AppContext.Provider value={[auth,setAuth]}>
{children}
    </AppContext.Provider>
 )

}

const useSearch = ()=> useContext(AppContext)

export {useSearch,SearchProvider}