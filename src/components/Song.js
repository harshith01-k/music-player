import React from "react";
import "../styles/song.css"
const Song = ({currentSong}) =>
{
    return(
        <div className ="song-container">
            <img className="song-img" alt={currentSong.name} src={currentSong.cover} />
            <h1>{currentSong.name}</h1>
            <h2>{currentSong.artist}</h2>
        </div>
    )
}
export default Song;