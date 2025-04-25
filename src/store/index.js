import { configureStore, createSlice, createAction } from '@reduxjs/toolkit'

export const reset = createAction("app/reset")

const movieSlice = createSlice({
    name: "movie",
    initialState: [],
    reducers: {
        addMovie(state, action) {
            state.push(action.payload)
        },
        removeMovie(state, action) {
            const index = state.indexOf(action.payload)
            state.splice(index,1)
        }
        // resetMovie(state, action) {
        //     state.length = 0
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

const songSlice = createSlice({
    name: "song",
    initialState: [],
    reducers: {
        addSong(state, action) {
            state.push(action.payload)
        },
        removeSong(state, action) {
            state.splice(state.indexOf(action.payload), 1)
        }
        // resetSong(state, action) {
        //     state.length = 0
        // }
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
            return []
        })
    }
})

const store = configureStore({
    reducer: {
        movies: movieSlice.reducer,
        songs: songSlice.reducer
    }
})

export {store};

export const {addMovie, removeMovie, resetMovie} = movieSlice.actions
export const {addSong, removeSong, resetSong} = songSlice.actions

// console.log(store.getState())

// store.dispatch({
//     type: "movies/addMovie",
//     payload: "New movies"
// })

// console.log(store.getState())


// store.dispatch(movieSlice.actions.addMovie("I am motherfucker Millionaire"))

// console.log(store.getState())

