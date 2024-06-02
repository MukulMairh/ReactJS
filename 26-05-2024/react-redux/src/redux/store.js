import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import ProductReducer from "./product/ProductReducer";

export default configureStore({
    reducer: {
        counter: counterReducer,
        product: ProductReducer
    }

})