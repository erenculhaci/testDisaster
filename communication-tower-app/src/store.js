import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a slice for the nodes
const nodeSlice = createSlice({
    name: 'nodes',
    initialState: [],
    reducers: {
        addNode: (state, action) => {
            state.push(action.payload); // Adds the new node to the array
        },
        deleteNode: (state, action) => {
            return state.filter((node) => node !== action.payload); // Removes the node from the array
        },
    },
});

// Export the actions
export const { addNode, deleteNode } = nodeSlice.actions;

// Create the store
const store = configureStore({
    reducer: {
        nodes: nodeSlice.reducer, // Register the node slice reducer
    },
});

export default store;
