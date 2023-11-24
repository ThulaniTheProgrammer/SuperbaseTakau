import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import statsService from "./statsService"
const initialState={
    data:[],
    loading:false,
    error:null,
    success:false
}
export const dailysales=createAsyncThunk('statistics/daily-sales',async(signature,thunkAPI)=>{
    try {
        return await statsService.dailysales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})
export const weeklysales=createAsyncThunk('statistics/weekly-sales',async(signature,thunkAPI)=>{
    try {
        return await statsService.weeklysales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})
export const monthlysales=createAsyncThunk('statistics/monthly-sales',async(signature,thunkAPI)=>{
    try {
        return await statsService.monthlysales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})
export const yearlysales=createAsyncThunk('statistics/yearly-sales',async(signature,thunkAPI)=>{
    try {
        return await statsService.yearlysales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})
export const cumulativesales=createAsyncThunk('statistics/cumulative-sales',async(signature,thunkAPI)=>{
    try {
        return await statsService.cumulativesales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
})


const statsSlice=createSlice({
    name:"stats",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
builder.addCase(dailysales.pending,(state)=>{
    state.loading=true
}).addCase(dailysales.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
}).addCase(dailysales.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
    
}).addCase(weeklysales.pending,(state)=>{
    state.loading=true
   
    
}).addCase(weeklysales.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
   
    
}).addCase(weeklysales.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
   
    
}).addCase(monthlysales.pending,(state)=>{
    state.loading=true
    
   
    
}).addCase(monthlysales.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true   
   
    
}).addCase(monthlysales.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
     
   
    
}).addCase(yearlysales.pending,(state)=>{
    state.loading=true
      
   
    
}).addCase(yearlysales.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
      
   
    
}).addCase(yearlysales.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
        
   
    
}).addCase(cumulativesales.pending,(state)=>{
    state.loading=true
    
        
   
    
}).addCase(cumulativesales.fulfilled,(state,action)=>{
    state.loading=false
    state.data=action.payload
    state.success=true
    
        
   
    
}).addCase(cumulativesales.rejected,(state,action)=>{
    state.loading=false
    state.error=action.payload
    
    
        
   
    
})
    }
})

export default statsSlice.reducer;