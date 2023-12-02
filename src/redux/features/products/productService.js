import axios from "axios";

const API_URL="api/v1/user/";
const BASE_URL=`https://takau-backend-master.onrender.com/api/v1/product`

function createConfig(signature) {
    let config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    return config
}

const createproduct=async(name,brand,model,year,barcode,buyingPrice,sellingPrice,quantityBought,quantitySold,signature)=>{
    let config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
const {data}= await axios.post(`${BASE_URL}/create-product`,{name,brand,model,year,barcode,buyingPrice,sellingPrice,quantityBought,quantitySold,signature,signature},config)
return data;
}
const updateproduct=async(id,product,signature)=>{
   const {data}= await axios.put(`${BASE_URL}/update-product/${id}`,product,createConfig(signature))
    return data
}
const getproducts=async(name,brand,model,year,barcode)=>{
    const {data}= await axios.get(`${BASE_URL}/get-products`);
    return data
}
const getproductbyid=async(id)=>{
    const {data}= await axios.get(`${BASE_URL}/get-product/${id}`);
    return data
}
const deleteproduct=async(id,signature)=>{
    const {data}= await axios.delete(`${BASE_URL}/delete-product/${id}`,createConfig(signature));
    return data
}






const productService={
 createproduct,updateproduct,deleteproduct,getproducts,getproductbyid
    
}

export default productService