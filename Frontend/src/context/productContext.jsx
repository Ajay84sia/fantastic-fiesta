import { createContext, useEffect, useReducer } from "react";
import axios from "axios"
import reducer from "../reducer/productReducer"

const AppContext = createContext()

const API = 'https://fantastic-backend.onrender.com/mens'

const initialState = {
    isLoading : false,
    isError : false,
    products: []
}

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts = async(url) => {
        dispatch({type: "SET_LOADING"});
        try{
            const res = await axios.get(url)
            const products = await res.data;
            dispatch({type: "SET_API_DATA", payload: products})
        }
        catch(error){
            console.log("error",error)
        }
    }

    useEffect(()=>{
      getProducts(API)
    },[])
    return (
         <AppContext.Provider value={{...state}}>
            {children}
         </AppContext.Provider>
    )
}

export {AppProvider, AppContext}