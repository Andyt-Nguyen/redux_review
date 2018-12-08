import { combineReducers } from 'redux'

const songsReducer = () => {
    return [
        {
            title: "No Scrubs",
            duration: "4:05"
        }, {
            title: "Macraina",
            duration: "4:05"
        }, {
            title: "I like it that way",
            duration: "1:45"
        }, {
            title: "All star",
            duration: "3:15"
        }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})