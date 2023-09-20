import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./shopping-cart/cartSlice.js";
import cartUISlice from "./shopping-cart/cartUISlice.js";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUI: cartUISlice.reducer
    }
})

export default store;