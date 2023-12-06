export const productReducer = (state,action)=>{

      switch (action.type) {
        case "FETCH_PRODUCTS_REQ":
          return { ...state, loading: true, error: null };
        case "FETCH_PRODUCTS_SUCCESS":
          const menFashion = action.payload.filter((curEle)=>{return curEle.category_id == 
            "6541072c52a07bd44012e47d"})
          return { ...state, loading: false,menFashion:menFashion,products: action.payload };
        case "FETCH_PRODUCTS_FAILURE": 
          return { ...state, loading: false, error: action.payload };
        case "SET_SEARCH_TERM":
            return { ...state, SearchTerm : action.payload };
        case "SET_SEARCH_RESULT":
              return { ...state, SearchItem : action.payload };
        
        default:
          return state;
      }
}


