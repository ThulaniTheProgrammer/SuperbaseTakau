import axios, { Axios } from 'axios'

import { CASHIER_DETAILS_FAIL, CASHIER_DETAILS_REQUEST, CASHIER_DETAILS_SUCCESS, CASHIER_REGISTER_FAIL, CASHIER_REGISTER_REQUEST, CASHIER_REGISTER_SUCCESS, CASHIER_SIGNIN_FAIL, CASHIER_SIGNIN_REQUEST, CASHIER_SIGNIN_SUCCESS, CASHIER_SIGNOUT } from '../constants/cashier';
export const cashiersignin= (email,password)=>async(dispatch)=>{
    
    
    dispatch({type:CASHIER_SIGNIN_REQUEST,payload:{email,password}})
    try {
        const {data}= await axios.post("http://localhost:5000/api/v1/login",{email,password});
        dispatch({type:CASHIER_SIGNIN_SUCCESS,payload:data});
        localStorage.setItem("cashierInfo",JSON.stringify(data))
    } catch (error) {
        dispatch({type:CASHIER_SIGNIN_FAIL,
        payload:
        error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        })
    }
}







export const cashierregister=(email,phone,password,name)=>async(dispatch,getState)=>{
    const {userSignin:{userInfo}}=getState()
    dispatch({type:CASHIER_REGISTER_REQUEST,payload:{email,phone,password,name}})
try {
    const {data}=await axios.post(`http://localhost:5000/api/v1/register`,{email,phone,password,name},{
        headers:{
            Authorization:`Bearer ${userInfo.signature}`
        }
    })

dispatch({type:CASHIER_REGISTER_SUCCESS,payload:data})


} catch (error) {
    dispatch({
        type:CASHIER_REGISTER_FAIL,
    payload:error.response &&
    error.response.data.message?error.response.data.message
    :error.message
    })
}
}

export const cashiersignout=()=>(dispatch)=>{
    localStorage.removeItem('cashierInfo')

    dispatch({
        type:CASHIER_SIGNOUT
    })
}




export const cashierdetails=()=>async (dispatch,getState)=>{
    dispatch({type:CASHIER_DETAILS_REQUEST});

    const {cashierSignin:{cashierInfo}}= getState();
   
  
  

    try {
       const {data}=await axios.get(`http://localhost:5000/api/v1/me/${userId}`,{
        headers:{  
           
            Authorization:`Bearer ${cashierInfo.token}`
    }
       } ) 
       dispatch({type:CASHIER_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        const message=error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:CASHIER_DETAILS_FAIL,payload: message})
    }
}



