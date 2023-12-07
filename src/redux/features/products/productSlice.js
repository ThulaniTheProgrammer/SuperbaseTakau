import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productService from "./productService"

const initialState={
    data:[],
    loading:false,
    error:null,
    success:false
}

<<<<<<< HEAD
export const createproduct=createAsyncThunk('product/create-product',async(name, brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,signature,thunkAPI)=>{
    try {
        console.log(signature);
        return await productService.createproduct(name, brand,model,sellingPrice,buyingPrice,barcode,quantityBought,quantitySold,year,signature)
=======
export const createproduct=createAsyncThunk('product/create-product',async(name,brand,model,year,barcode,buyingPrice,sellingPrice,quantityBought,quantitySold,signature,thunkAPI)=>{
    try {
        return await productService.createproduct(name,brand,model,year,barcode,buyingPrice,sellingPrice,quantityBought,quantitySold,signature,signature)
>>>>>>> 4097a7dec319f67d567bd3b911ae799232ec3e5d
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })
export const getproducts=createAsyncThunk('product/get-products',async(name,brand,model,year,barcode,thunkAPI)=>{
    try {
        return await productService.getproducts(name,brand,model,year,barcode)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
    }
    })

export const getproductbyid=createAsyncThunk('product/get-product',async(id,thunkAPI)=>{
    try {
        return await productService.getproductbyid(id)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const updateproduct=createAsyncThunk('product/update-product',async(id,data,signature,thunkAPI)=>{
    try {
        return await productService.updateproduct(id,data,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const deleteproduct=createAsyncThunk("product/delete-product",async(id,signature,thunkAPI)=>{
    try {
        return await productService.deleteproduct(id,signature)
    } catch (error) {
        const message= (error.response&& error.response.data&&error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})


export const productSlice= createSlice({
    name:"product-slice",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(createproduct.pending,(state)=>{
            state.loading=true
        }).addCase(createproduct.fulfilled,(state,action)=>{
            state.loading=false
            state.success=true
            state.data=action.payload
        }).addCase(createproduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
        }).addCase(getproducts.pending,(state)=>{
            state.loading=true
         
        }).addCase(getproducts.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.success=true
         
        }).addCase(getproducts.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
         
        }).addCase(getproductbyid.pending,(state)=>{
            state.loading=true
                     
         
        }).addCase(getproductbyid.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.success=true
                            
        }).addCase(getproductbyid.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
                            
        }).addCase(updateproduct.pending,(state)=>{
            state.loading=true
                     
                           
        }).addCase(updateproduct.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.success=true                   
              })
        .addCase(updateproduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
                            
              }).addCase(deleteproduct.pending,(state)=>{
            state.loading=true
           
                            
              }).addCase(deleteproduct.fulfilled,(state,action)=>{
            state.loading=false
            state.data=action.payload
            state.success=true
                                     
              }).addCase(deleteproduct.rejected,(state,action)=>{
            state.loading=false
            state.error=action.payload
            
           
                            
              })
    }
})

export default productSlice.reducer;