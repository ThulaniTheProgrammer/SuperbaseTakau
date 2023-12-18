import { SALES_CREATE_FAIL, SALES_CREATE_REQUEST, SALES_CREATE_SUCCESS, SALES_DELETE_FAIL, SALES_DELETE_REQUEST, SALES_DELETE_SUCCESS, SALES_LIST_FAIL, SALES_LIST_REQUEST, SALES_LIST_SUCCESS, SALES_UPDATE_FAIL, SALES_UPDATE_REQUEST, SALES_UPDATE_SUCCESS } from "../constants/sales";
import axios from "axios";
import { useSelector } from "react-redux";

export const getsales =()=>async(dispatch,getState)=>{
  const {userSignin:{userInfo}}= getState();
  let token=userInfo.token;

    dispatch({
        type:SALES_LIST_REQUEST
    });
 
   
    
    try {
      const {data}  = await axios.get('http://localhost:5000/api/v1/get-sales'  ,{
        headers:{  
      
            Authorization:`Bearer ${userInfo.token}`
    }
}    
 ) 
   
dispatch({type:SALES_LIST_SUCCESS,payload:data});
     } catch (error) {
    const message=  error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:SALES_LIST_FAIL,payload:message})
}

   
}




























export const createsale=(productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod)=>async (dispatch,getState)=>{
  const infoData={productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod}

  dispatch({type:SALES_CREATE_REQUEST,payload:infoData});
  const {userSignin:{userInfo}}= getState();
  let token=userInfo.token;
 

  try {
   
    const {data}= await axios.post('http://localhost:5000/api/v1/add-sales',{productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod},{
      headers:{
          Authorization:`Bearer ${userInfo.token}`
      }
  })
  console.log(data);
  dispatch({type:SALES_CREATE_SUCCESS,payload:data.infoData});
 
  } catch (error) {
    const message=  error.response&& error.response.data.message
    ? error.response.data.message
    : error.message
    dispatch({type:SALES_CREATE_FAIL,payload:message})
  }
}





export const updatesale=(productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod,id)=>async (dispatch,getState)=>{
  const infoData={productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod,id}
  dispatch({type:SALES_UPDATE_REQUEST,payload:infoData});

  const {userSignin:{userInfo}}= getState();
  let token=userInfo.token;
  try {
    
    const {data}= await axios.patch(`http://localhost:9000/api/v1/update-sale/${id}`,{productName,dimension,unitPrice,quantitiesSold,totalPrice,currency,paymentMethod,id},{
      headers:{
          Authorization:`Bearer ${userInfo.token}`
      }
  })
  dispatch({type:SALES_UPDATE_SUCCESS,payload:data.infoData});
  } catch (error) {
    const message=  error.response&& error.response.data.message
    ? error.response.data.message
    : error.message
    dispatch({type:SALES_UPDATE_FAIL,payload:message})
  }
}



export const deletesale=(id)=>async(dispatch,getState)=>{
  dispatch({type:SALES_DELETE_REQUEST,payload:id});
  const {userSignin:{userInfo}}= getState();
let token=userInfo.token
  try {

    
    const {data}= await axios.delete(`http://localhost:5000/api/v1/delete-sale/${id}`,{
      headers:{
          Authorization:`Bearer ${userInfo.token}`
      }
  })
    dispatch({type:SALES_DELETE_SUCCESS,payload:data.id})
  } catch (error) {
    const message=  error.response&& error.response.data.message
    ? error.response.data.message
    : error.message
    dispatch({type:SALES_DELETE_FAIL,payload:message})
  }
}