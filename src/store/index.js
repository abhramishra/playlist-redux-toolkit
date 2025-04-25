import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

// Create a global reset action that can reset multiple slices
export const reset = createAction("app/reset")

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
        // Uncomment the following to reset the movie playlist independently
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
        // Uncomment the following to reset the song playlist independently
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

// Configure the Redux store with the movie and song reducers
const store = configureStore({
    reducer: {
        movies: movieSlice.reducer, // Reducer for the movie slice
        songs: songSlice.reducer // Reducer for the song slice
    }
})

// Export the store to be used in the application
export { store }

// Export the actions for the movie and song slices
export const { addMovie, removeMovie, resetMovie } = movieSlice.actions
export const { addSong, removeSong, resetSong } = songSlice.actions

// Uncomment the following for debugging purposes
// console.log(store.getState())

// Example dispatch to add a movie
// store.dispatch({
//     type: "movies/addMovie",
//     payload: "New movies"
// })

// console.log(store.getState())

// Example dispatch using the movie slice action
// store.dispatch(movieSlice.actions.addMovie("I am motherfucker Millionaire"))

// console.log(store.getState())

