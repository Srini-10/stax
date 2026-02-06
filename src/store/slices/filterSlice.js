import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: [],
    fabric: [],
    size: [],
    color: [],
    priceRange: [0, 200],
    sortBy: 'newest',
    viewMode: 'grid'
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        toggleFabric: (state, action) => {
            const fabric = action.payload;
            if (state.fabric.includes(fabric)) {
                state.fabric = state.fabric.filter(f => f !== fabric);
            } else {
                state.fabric.push(fabric);
            }
        },
        toggleSize: (state, action) => {
            const size = action.payload;
            if (state.size.includes(size)) {
                state.size = state.size.filter(s => s !== size);
            } else {
                state.size.push(size);
            }
        },
        toggleColor: (state, action) => {
            const color = action.payload;
            if (state.color.includes(color)) {
                state.color = state.color.filter(c => c !== color);
            } else {
                state.color.push(color);
            }
        },
        setPriceRange: (state, action) => {
            state.priceRange = action.payload;
        },
        setSortBy: (state, action) => {
            state.sortBy = action.payload;
        },
        setViewMode: (state, action) => {
            state.viewMode = action.payload;
        },
        clearAllFilters: (state) => {
            state.category = [];
            state.fabric = [];
            state.size = [];
            state.color = [];
            state.priceRange = [0, 200];
        },
        removeFilter: (state, action) => {
            const { type, value } = action.payload;
            if (state[type]) {
                state[type] = state[type].filter(item => item !== value);
            }
        }
    }
});

export const {
    setCategory,
    toggleFabric,
    toggleSize,
    toggleColor,
    setPriceRange,
    setSortBy,
    setViewMode,
    clearAllFilters,
    removeFilter
} = filterSlice.actions;

// Selectors
export const selectFilters = (state) => state.filter;
export const selectActiveFilterCount = (state) => {
    const { category, fabric, size, color } = state.filter;
    return category.length + fabric.length + size.length + color.length;
};

export default filterSlice.reducer;
