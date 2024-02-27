import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    data : [],
};
const productSlice = createSlice({

    name: 'products',
    initialState,
    reducers : {
    //   fetchProducts(state, action){
    //    const data = await fetch("https://fakestoreapi.com/products")
      
    //   },
    extraReducers: (builder) =>{
builder
.addCase(getProducts.fulfilled, (state, action) =>{
    state.data = action.payload;
})
    }

        //delete waala reducer bhi bana sakte
}
}

);
export const {} = productSlice.actions;
export default productSlice.reducer;
export const getProducts = createAsyncThunk('products/get', async ()=>{
    const data = await fetch("https://fakestoreapi.com/products")
       const result= await data.json();
       return result
})
//export function getProducts(){
  //  return async function getProductsThunk(dispatch, getState){
    //  const data = await fetch("https://fakestoreapi.com/products")
      // const result= data.json();
       //dispatch(fetchProducts(result))
  //  }
//}