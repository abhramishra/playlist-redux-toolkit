import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/action";
// Movie slice: manages the state and actions for the movie playlist
const movieSlice = createSlice({
    name: "movie", // Name of the slice
    initialState: [], // Initial state for the movie slice
    reducers: {
        // Action to add a movie to the playlist
        addMovie(state, action) {
            state.push(action.payload) // Add the new movie to the state array
        },
        // Action to remove a movie from the playlist
        removeMovie(state, action) {
            const index = state.indexOf(action.payload) // Find the index of the movie
            state.splice(index, 1) // Remove the movie from the state array
        }
        // resetMovie(state, action) {
        //     state.length = 0 // Clear the movie playlist
        // }
    },
    extraReducers(builder) {
        // Handle the global reset action for the movie slice
        builder.addCase(reset, (state, action) => {
            return [] // Reset the movie playlist to an empty array
        })
    }
})

export const {addMovie, removeMovie} = movieSlice.actions
export const movieReducer = movieSlice.reducer