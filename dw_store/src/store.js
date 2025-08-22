import { configureStore } from "@reduxjs/toolkit";
// retirer acccolade
import counterSlice from "./features/counterSlice";
import cartSlice from "./features/cartSlice";
 
export default configureStore({
    reducer: {
        counter: counterSlice,
        cart : cartSlice
    },
});