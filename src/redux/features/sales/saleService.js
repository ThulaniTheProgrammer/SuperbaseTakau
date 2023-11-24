import axios from "axios";


const BASE_URL="https://takau-backend-master.onrender.com/api/v1/sale/"

function createConfig(signature) {
    let config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    return config
}
const getsales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}get-sales`,createConfig(signature))
    return data;
    }
const getsale=async(id,signature)=>{

    const {data}= await axios.get(`${BASE_URL}get-sale/${id}`,createConfig(signature))
    return data;
    }
const createsale=async(currency,paymentMethod,signature)=>{
   const {data}= await axios.post(`${BASE_URL}/create-sale`,{currency,paymentMethod},createConfig(signature))
   return data
}
const deletesale=async(id,signature)=>{
   const {data}= await axios.delete(`${BASE_URL}delete-sale/${id}`,createConfig(signature))
    return data
}







const saleService={
getsale,getsales,createsale,deletesale
    
}

export default saleService