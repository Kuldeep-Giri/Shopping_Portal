import { useState, useContext, createContext } from "react";

const LoadingContext = createContext();
const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={[loading,setLoading]}>
      {children}
    </LoadingContext.Provider>
  );
};

// custom hook
const useLoading = () => useContext(LoadingContext);

export { useLoading, LoadingProvider };