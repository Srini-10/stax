import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    selectedGift: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId, name, price, size, color, image } = action.payload;
            const existingItem = state.items.find(
                item => item.productId === productId && item.size === size && item.color === color
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({
                    id: Date.now(),
                    productId,
                    name,
                    price,
                    size,
                    color,
                    image,
                    quantity: 1
                });
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                item.quantity = quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.selectedGift = null;
        },
        selectGift: (state, action) => {
            state.selectedGift = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart, selectGift } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) =>
    state.cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectCartItemCount = (state) =>
    state.cart.items.reduce((count, item) => count + item.quantity, 0);
export const selectSelectedGift = (state) => state.cart.selectedGift;

export default cartSlice.reducer;
