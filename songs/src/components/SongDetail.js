import React from "react"
import { connect } from "react-redux"


const mapStateToProps = (state) => {
    console.log(state)
    return { song: state.selectedSong}
}


export default connect(mapStateToProps)(
    ({song}) => {
    if(!song) return <div>No song was selected</div>
    return (
    <div>
        <h4>Song Details</h4>
        <p>Song: {song.title}</p>
        <p>Duration: {song.duration}</p>
    </div>
)})
