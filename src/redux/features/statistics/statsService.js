import axios from "axios";


const BASE_URL="https://takau-backend-master.onrender.com/api/v1/statistics/"

function createConfig(signature) {
    let config={
        headers:{
            "Content-Type":"application/json",
            authorization:`Bearer ${signature}`
        }
    }
    return config
}
const dailysales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}daily-sales`,createConfig(signature))
    return data;
    }
const weeklysales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}weekly-sales`,createConfig(signature))
    return data;
    }
const monthlysales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}monthly-sales`,createConfig(signature))
    return data;
    }
const yearlysales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}yearly-sales`,createConfig(signature))
    return data;
    }
const cumulativesales=async(signature)=>{

    const {data}= await axios.get(`${BASE_URL}cumulative-sales`,createConfig(signature))
    return data;
    }
    const statsService={
    dailysales,weeklysales,monthlysales,yearlysales,cumulativesales
            
        }
        
        export default statsService

