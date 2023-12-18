import axios, { Axios } from 'axios'
import {DELETE_ADMIN_FAIL, DELETE_ADMIN_REQUEST, DELETE_ADMIN_SUCCESS, FARMERS_LIST_FAIL, FARMERS_LIST_REQUEST, FARMERS_LIST_SUCCESS, FARMER_CAPITAL_FAIL, FARMER_CAPITAL_REQUEST, FARMER_CAPITAL_SUCCESS, FARMER_GENERAL_EXPENSES_FAIL, FARMER_GENERAL_EXPENSES_REQUEST, FARMER_GENERAL_EXPENSES_SUCCESS, FARMER_INHERITANCE_REQUEST, FARMER_INHERITANCE_SUCCESS, FARMER_INTANGIBLE_FAIL, FARMER_INTANGIBLE_REQUEST, FARMER_INTANGIBLE_SUCCESS, FARMER_LIVESTOCK_EXPENSES_FAIL, FARMER_LIVESTOCK_EXPENSES_REQUEST, FARMER_LIVESTOCK_EXPENSES_SUCCESS, FARMER_LIVESTOCK_FAIL, FARMER_LIVESTOCK_REQUEST, FARMER_LIVESTOCK_SALES_FAIL, FARMER_LIVESTOCK_SALES_REQUEST, FARMER_LIVESTOCK_SALES_SUCCESS, FARMER_LIVESTOCK_SUCCESS, FARMER_LOAN_FAIL, FARMER_LOAN_REQUEST, FARMER_LOAN_SUCCESS, FARMER_ORCHARD_EXPENSES_FAIL, FARMER_ORCHARD_EXPENSES_REQUEST, FARMER_ORCHARD_EXPENSES_SUCCESS, FARMER_ORCHARD_FAIL, FARMER_ORCHARD_REQUEST, FARMER_ORCHARD_SALES_FAIL, FARMER_ORCHARD_SALES_REQUEST, FARMER_ORCHARD_SALES_SUCCESS, FARMER_ORCHARD_SUCCESS, FARMER_PLANTS_FAIL, FARMER_PLANTS_REQUEST, FARMER_PLANTS_SUCCESS, FARMER_PLANT_EXPENSES_FAIL, FARMER_PLANT_EXPENSES_REQUEST, FARMER_PLANT_EXPENSES_SUCCESS, FARMER_PLANT_SALES_FAIL, FARMER_PLANT_SALES_REQUEST, FARMER_PLANT_SALES_SUCCESS, FARMER_SAVINGS_FAIL, FARMER_SAVINGS_REQUEST, FARMER_SAVINGS_SUCCESS, FARMER_TANGIBLE_FAIL, FARMER_TANGIBLE_REQUEST, FARMER_TANGIBLE_SUCCESS, GET_CASHIERS_FAIL, GET_CASHIERS_REQUEST, GET_CASHIERS_SUCCESS, SUPER_DETAILS_FAIL, SUPER_DETAILS_REQUEST, SUPER_DETAILS_SUCCESS, SUPER_FARMERS_DETAILS_REQUEST, SUPER_FARMERS_DETAILS_SUCCSS, SUPER_FARMERS_LIST_FAIL, SUPER_FARMERS_LIST_REQUEST, SUPER_FARMERS_LIST_SUCCESS, SUPER_FARMER_DETAILS_FAIL, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT} from "../constants/userConstants"
import { baseUrl } from './baseUrl'
import { GET_ADMINS_FAIL, GET_ADMINS_REQUEST, GET_ADMINS_SUCCESS } from '../constants/admin'

export const signin= (email,password)=>async(dispatch)=>{
    
    
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}})
    try {
        const {data}= await axios.post(`${baseUrl}manager/signin`,{email,password});
        dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
        localStorage.setItem("userInfo",JSON.stringify(data))
    } catch (error) {
        console.log(error);
        dispatch({type:USER_SIGNIN_FAIL,
        payload:error.response.data.msg
       
        })
    }
}

export const register=(name,surname,phone,email,password)=>async(dispatch)=>{
    dispatch({type:USER_REGISTER_REQUEST,payload:{name,surname,phone,email,password}})
try {
    const {data}=await axios.post(`${baseUrl}manager/signup`,{name,surname,phone,email,password})

dispatch({type:USER_REGISTER_SUCCESS,payload:data})

dispatch({type:USER_SIGNIN_SUCCESS,payload:data})
localStorage.setItem('userInfo',JSON.stringify(data))
} catch (error) {
    dispatch({
        type:USER_REGISTER_FAIL,
    payload:error.response &&
    error.response.data.message?error.response.data.message
    :error.message
    })
}
}

export const signout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo')

    dispatch({
        type:USER_SIGNOUT
    })
}




export const detailsuser=(userId)=>async (dispatch,getState)=>{
    dispatch({type:USER_DETAILS_REQUEST,payload:userId});

    const {userSignin:{userInfo}}= getState();
    let token=userInfo.token;
  
  

    try {
       const {data}=await axios.get(`${baseUrl}manager/get-profile`,{
        headers:{  
           
            Authorization:`Bearer ${userInfo.signature}`
    }
       } ) 
       dispatch({type:USER_DETAILS_SUCCESS,payload:data})
    } catch (error) {
        const message=error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:USER_DETAILS_FAIL,payload: message})
    }
}
export const getadmins=()=>async (dispatch,getState)=>{
    dispatch({type:GET_ADMINS_REQUEST});

    const {userSignin:{userInfo}}= getState();
    let token=userInfo.token;
  
  

    try {
      
       const {data}=await axios.get(`${baseUrl}manager/get-admins`,{
        headers:{  
           
            Authorization:`Bearer ${userInfo.signature}`
    }
       } ) 
       console.log(data);
       dispatch({type:GET_ADMINS_SUCCESS,payload:data})
    } catch (error) {
        const message=error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:GET_ADMINS_FAIL,payload: message})
    }
}
export const getcashiers=()=>async (dispatch,getState)=>{
    dispatch({type:GET_CASHIERS_REQUEST});

    const {userSignin:{userInfo}}= getState();
    let token=userInfo.token;
  
  

    try {
      
       const {data}=await axios.get(`${baseUrl}manager/get-cashiers`,{
        headers:{  
           
            Authorization:`Bearer ${userInfo.signature}`
    }
       } ) 
       console.log(data);
       dispatch({type:GET_CASHIERS_SUCCESS,payload:data})
    } catch (error) {
        const message=error.response&& error.response.data.message
        ? error.response.data.message
        : error.message
        dispatch({type:GET_CASHIERS_FAIL,payload: message})
    }
}



