import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";

const loadCartFromLocalStorage = () => {
    try {
        const data = localStorage.getItem("cart");
        return data ? JSON.parse(data) : [];
    } catch (error) {
        return [];
    }
};

export const store = configureStore({
    reducer: {
        cart: CartSlice.reducer,
    },
    preloadedState: {
        cart: loadCartFromLocalStorage(),
    },
});

store.subscribe(() => {
    localStorage.setItem(
        "cart",
        JSON.stringify(store.getState().cart)
    );
});
