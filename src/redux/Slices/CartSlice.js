import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers: {
        add: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );

            if (itemIndex >= 0) {
                state[itemIndex].quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },

        remove: (state, action) => {
            return state.filter((item) => item.id !== action.payload);
        },

        incrementQuantity: (state, action) => {
            const item = state.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },

        decrementQuantity: (state, action) => {
            const itemIndex = state.findIndex(
                (item) => item.id === action.payload
            );

            if (itemIndex >= 0) {
                if (state[itemIndex].quantity > 1) {
                    state[itemIndex].quantity -= 1;
                } else {
                    // if quantity becomes 0, remove item
                    state.splice(itemIndex, 1);
                }
            }
        },

        clearCart: () => {
            return [];
        },
    }
});

export const {add, remove, incrementQuantity, decrementQuantity, clearCart} = CartSlice.actions;
export default CartSlice.reducer;