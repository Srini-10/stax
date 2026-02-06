import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    name: '',
    email: '',
    loyaltyPoints: 150,
    loyaltyTier: 'Member',
    sizePreferences: {
        tops: 'M',
        bottoms: 'M',
        sportsBras: 'M'
    },
    recentlyViewed: []
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.name = action.payload.name;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.name = '';
            state.email = '';
        },
        updateSizePreference: (state, action) => {
            const { category, size } = action.payload;
            state.sizePreferences[category] = size;
        },
        addLoyaltyPoints: (state, action) => {
            state.loyaltyPoints += action.payload;
            // Update tier based on points
            if (state.loyaltyPoints >= 1000) {
                state.loyaltyTier = 'Platinum';
            } else if (state.loyaltyPoints >= 500) {
                state.loyaltyTier = 'Gold';
            } else {
                state.loyaltyTier = 'Member';
            }
        },
        addToRecentlyViewed: (state, action) => {
            const product = action.payload;
            // Remove if already exists
            state.recentlyViewed = state.recentlyViewed.filter(p => p.id !== product.id);
            // Add to beginning
            state.recentlyViewed.unshift(product);
            // Keep only last 10
            state.recentlyViewed = state.recentlyViewed.slice(0, 10);
        }
    }
});

export const {
    login,
    logout,
    updateSizePreference,
    addLoyaltyPoints,
    addToRecentlyViewed
} = userSlice.actions;

// Selectors
export const selectUser = (state) => state.user;
export const selectLoyaltyInfo = (state) => ({
    points: state.user.loyaltyPoints,
    tier: state.user.loyaltyTier
});
export const selectSizePreferences = (state) => state.user.sizePreferences;
export const selectRecentlyViewed = (state) => state.user.recentlyViewed;

export default userSlice.reducer;
