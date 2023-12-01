import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import saleService from "./saleService"

const initialState={
    data:[],
    loading:false,
    error:null,
    success:false
}

export const createsale=createAsyncThunk('sale/create-sale',async(currency,paymentMethod,signature,thunkAPI)=>{
    try {
        return await saleService.createsale(currency,paymentMethod,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const getsales=createAsyncThunk('sale/get-sales',async(signature,thunkAPI)=>{
    try {
        return await saleService.getsales(signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const getsale=createAsyncThunk('sale/get-sale',async(id,signature,thunkAPI)=>{
    try {
        return await saleService.getsale(id,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const deletesale=createAsyncThunk('sale/delete-sale',async(id,signature,thunkAPI)=>{
    try {
        return await saleService.deletesale(id,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })

    export  const saleSlice=createSlice({
        name:"sale-slice",
            initialState,
    
            reducers:{},
            extraReducers:(builder)=>{
    builder.addCase(createsale.pending,(state)=>{
        state.loading=true
    }).addCase(createsale.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.success=true
    }).addCase(createsale.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
        
    }).addCase(getsales.pending,(state)=>{
        state.loading=true
        
        
    }).addCase(getsales.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.success=true
           
    }).addCase(getsales.rejected,(state,action)=>{
        state.loading=false
        state.data=action.payload
           
    }).addCase(getsale.pending,(state)=>{
        state.loading=true
    
    }).addCase(getsale.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.success=true
        
    }).addCase(getsale.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
       
        
    }).addCase(deletesale.pending,(state)=>{
        state.loading=true
    }).addCase(deletesale.fulfilled,(state,action)=>{
        state.loading=false
        state.data=action.payload
        state.success=true
    }).addCase(deletesale.rejected,(state,action)=>{
        state.loading=false
        state.error=action.payload
       
    })
    
            }
        })

        export default saleSlice.reducer