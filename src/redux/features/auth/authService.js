import axios from "axios";

const API_URL="api/v1/user/";
const BASE_URL=`https://takau-backend-master.onrender.com/api/v1/`





const managerSignup=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}manager/signup`,userData);
   
    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const managerSignin=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}manager/signin`,userData);

    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const managerUpdateProfile=async(userData,signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.post(`${BASE_URL}manager/update-profile`,userData,config);
  //  console.log(response);
    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const managerProfile=async(signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.get(`${BASE_URL}manager/get-profile`,config) 
    return data
}

const adminSignup=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}admin/signup`,userData);
  
    return data
}
const adminSignin=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}admin/signin`,userData);
   
    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const adminUpdateProfile=async(userData,signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.post(`${BASE_URL}admin/update-profile`,userData,config);
  //  console.log(response);
    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const adminProfile=async(signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.get(`${BASE_URL}admin/get-profile`,config) 
    return data
}
const tillOperatorSignup=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}till-operator/signup`,userData);
  
   
    return data
}
const tillOperatorSignin=async(userData)=>{
    const {data}= await axios.post(`${BASE_URL}till-operator/signin`,userData);
   
    if (data) {
        localStorage.setItem("user",JSON.stringify(data))
    }
    return data
}
const tillOperatorUpdateProfile=async(userData,signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.post(`${BASE_URL}till-operator/update-profile`,userData,config);
  //  console.log(response);
  
    return data
}
const tillOperatorProfile=async(signature)=>{
    const config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    const {data}= await axios.get(`${BASE_URL}till-operator/get-profile`,config) 
    return data
}
const logout=()=>{
    localStorage.removeItem("user")
}

const authService={
    adminProfile,
    adminSignin,
    adminSignup,
    adminUpdateProfile,
    tillOperatorProfile,
    tillOperatorSignin,
    tillOperatorSignup,
    tillOperatorUpdateProfile,
    managerProfile,
    managerSignin,
    managerSignup,
    managerUpdateProfile,
    logout,
    
}

export default authService