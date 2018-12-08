import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'


const mapStateToProps = (state) => {
    return {
        songs: state.songs
    }
}

export default connect(mapStateToProps, { selectSong })(
    class SongList extends Component {
        renderList() {
            return this.props.songs.map( (a) => (
                <div key={a.title} className="item">
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(a)}
                            >
                            Selected</button>
                    </div>
    
                    <div className="content">
                        {a.title}
                    </div>
                </div>
            ))
        }
        render() {
            return (
                <div className={"ui divided list"}>
                    { this.renderList() }
                </div>
            )
        }
    }
)

