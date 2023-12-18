import { CREATE_PRODUCT_FAIL, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, GET_PRODUCTS_FAIL, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FAIL, GET_PRODUCT_REQUEST, GET_PRODUCT_SUCCESS, UPDATE_PRODUCT_FAIL, UPDATE_PRODUCT_REQUEST, UPDATE_PRODUCT_SUCCESS } from "../constants/products";
import axios from 'axios';
import { baseUrl } from "./baseUrl";

export const getproducts =()=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();
    let token=userInfo.token;
   
      dispatch({
          type:GET_PRODUCTS_REQUEST
      });
   
  
      try {
        const {data}  = await axios.get(`${baseUrl}product/get-products`    
   ) 
     
            
  dispatch({type:GET_PRODUCTS_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_PRODUCTS_FAIL,payload:message})
  }
  
     
  }
export const getproduct =(id)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();
 
      dispatch({
          type:GET_PRODUCT_REQUEST
      });
   
     
      console.log(userInfo);
      try {
        const {data}  = await axios.get(`${baseUrl}product/get-product/${id}`    
   ) 
     
        console.log(data);    
  dispatch({type:GET_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:GET_PRODUCT_FAIL,payload:message})
  }
  
     
  }
export const createproduct =(name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,image)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();
   

    let infoData={name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,image};
  
      dispatch({
          type:CREATE_PRODUCT_REQUEST,payload:infoData
      });
   
     
      
      try {
        
      //
        const {data}  = await axios.post(`${baseUrl}product/create-product`, {name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,image} ,
    {
      headers:{  
        
       
        'Content-Type': 'multipart/form-data',
        "Authorization":`Bearer ${userInfo.signature}`
}
    }
    
       
  
   ) 
     
        console.log(data);    
  dispatch({type:CREATE_PRODUCT_SUCCESS,payload:data});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:CREATE_PRODUCT_FAIL,payload:message})
  }
  
     
  }


export const updateproduct =(name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,id)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}= getState();

    let infoData={name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,id};
    
      dispatch({
          type:UPDATE_PRODUCT_REQUEST,payload:infoData
      });
   
     
      console.log(userInfo);
      try {
        const {data}  = await axios.patch(`${baseUrl}product/update-product/${id}`, {name,brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,shelfNumber,id} ,{
        
  }    
   ) 
     
        console.log(data);    
  dispatch({type:UPDATE_PRODUCT_SUCCESS,payload:data.infoData});
       } catch (error) {
      const message=  error.response&& error.response.data.message
          ? error.response.data.message
          : error.message
          dispatch({type:UPDATE_PRODUCT_FAIL,payload:message})
  }
  
     
  }

  export const deleteproduct=(id)=>async(dispatch,getState)=>{
    dispatch({type:DELETE_PRODUCT_REQUEST,payload:id});
    const {userSignin:{userInfo}}= getState();

    try {
      const {data}= await axios.delete(`${baseUrl}product/delete-product/${id}`,{
        headers:{
          Authorization:`Bearer ${userInfo.token}`
      }
    
      })
      dispatch({type:DELETE_PRODUCT_SUCCESS,payload:data.id})
    } catch (error) {
      const message=  error.response&& error.response.data.message
      ? error.response.data.message
      : error.message
      dispatch({type:DELETE_PRODUCT_FAIL,payload:message})
    }
  }