import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { addSong, removeSong } from "../store";

function SongList() {
    const dispatch = useDispatch()
    const listSongs = useSelector(state => {
        return state.songs
    })

    const handleAddSong = () => {
        const newSong = "New song " + Math.ceil(Math.random() * 100)
        dispatch(addSong(newSong)) 
    }

    const handleRemoveSong = (song) => {
        dispatch(removeSong(song))
    }

    const ShowSongs = listSongs.map((song, index) => {
        return (
            <li key={index}>
                { song }
                <button onClick={() => handleRemoveSong(song)}>Remove</button>
            </li>
        )
    })

    return (
        <div>
            <h2>Song Playlist</h2>
            <button onClick={handleAddSong}>+ Add Song to Playlist</button>
            {ShowSongs}
        </div>
    )
}

export default SongList