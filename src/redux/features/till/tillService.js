import axios from "axios";


const BASE_URL="https://takau-backend-master.onrender.com/api/v1/till/"

function createConfig(signature) {
    let config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    return config
}
const addtotill=async(productId,quantity,name,price,brand,model,signature)=>{

const {data}= await axios.post(`${BASE_URL}add-to-till`,{productId,quantity,name,price,brand,model},createConfig(signature))
return data;
}
const gettill=async(signature)=>{

const {data}= await axios.get(`${BASE_URL}get-till`,createConfig(signature))
return data;
}
const deletetillitem=async(id,signature)=>{
   const {data}= await axios.delete(`${BASE_URL}delete-till-item/${id}`,createConfig(signature))
    return data
}
const emptytill=async(id,signature)=>{
    const {data}= await axios.put(`${BASE_URL}empty-till/${id}`,createConfig(signature));
    return data
}






const tillService={
addtotill,gettill,deletetillitem,emptytill
    
}

export default tillService