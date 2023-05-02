import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        products: [],
        quantity: 0,
        total: 0,
        discount: 0,
    },
    reducers: {
        addProduct: (state, action) => {
            // console.log(action.payload.quantity)
            state.quantity += action.payload.quantity;
            const quant = state.quantity;
            state.products.push(action.payload);
            state.discount = (quant>=2) ? (action.payload.price * 0.5):(0);
            state.total += action.payload.price * action.payload.quantity-state.discount;
            
        },
        cleanCart: (state) => {
            state.quantity = 0;
            state.products = [];
            state.total = 0;
            state.discount = 0;
        },
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            console.log(state.products._id)
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),1
            );  
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        deleteTotalStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteTotalSuccess: (state, action) => {
            // console.log(action.payload)
            state.total = state.total - action.payload;  
        },
        deleteTotalFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
        deleteQuantityStart: (state) => {
            state.isFetching = true;
            state.error = false;
        },
        deleteQuantitySuccess: (state, action) => {
            // console.log(action.payload)
            state.quantity = state.quantity - action.payload;  
        },
        deleteQuantityFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

    },
});
export const { 
    addProduct, 
    
    cleanCart, 
    
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
    deleteTotalStart,
    deleteTotalSuccess,
    deleteTotalFailure,
    deleteQuantityStart,
    deleteQuantitySuccess,
    deleteQuantityFailure,
} = cartSlice.actions;
export default cartSlice.reducer;