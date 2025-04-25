import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions/action";

// Song slice: manages the state and actions for the song playlist
const songSlice = createSlice({
    name: "song", // Name of the slice
    initialState: [], // Initial state for the song slice
    reducers: {
        // Action to add a song to the playlist
        addSong(state, action) {
            state.push(action.payload) // Add the new song to the state array
        },
        // Action to remove a song from the playlist
        removeSong(state, action) {
            const index = state.indexOf(action.payload) // Find the index of the song
            state.splice(index, 1) // Remove the song from the state array
        }
        // resetSong(state, action) {
        //     state.length = 0 // Clear the song playlist
        // }
    },
    extraReducers(builder) {
        // Handle the global reset action for the song slice
        builder.addCase(reset, (state, action) => {
            return [] // Reset the song playlist to an empty array
        })
    }
})

export const {addSong, removeSong} = songSlice.actions
export const songReducer = songSlice.reducer