import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'
import { movieReducer, addMovie, removeMovie } from './slices/movieSlice'
import { songReducer, addSong, removeSong } from './slices/songSlice'
import { reset } from './actions/action'
// Configure the Redux store with the movie and song reducers
const store = configureStore({
    reducer: {
        movies: movieReducer, // Reducer for the movie slice
        songs: songReducer // Reducer for the song slice
    }
})

// Export the store to be used in the application
export { store, addMovie, removeMovie, addSong, removeSong, reset }

// Export the actions for the movie and song slices
// export const { addMovie, removeMovie, resetMovie } = movieSlice.actions
// export const { addSong, removeSong, resetSong } = songSlice.actions

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

