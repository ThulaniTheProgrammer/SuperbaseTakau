import { configureStore } from "@reduxjs/toolkit";




import authReducer      from "./features/auth/authSlice";
import productReducer from "./features/products/productSlice"
import tillReducer from "./features/till/tillSlice";
import saleReducer from "./features/sales/saleSlice";
import statsReducer from "./features/statistics/statsSlice";

const store= configureStore({
    reducer:{
     
        auth:authReducer,
        products:productReducer,
        till:tillReducer,
        sale:saleReducer,
        statistics:statsReducer
        
        
        
      
       
    },
   
})

export default store;