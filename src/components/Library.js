import React from "react";
import LibrarySongs from "./LibrarySongs"
import "../styles/library.css"
const Library = ({songs,setCurrentSong,audioRef,isPlaying}) =>
{
    return(
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((son)=> <LibrarySongs
                songs={songs}
                 son ={son}
                 setCurrentSong={setCurrentSong}
                 id={son.id}
                 key={son.id}
                 audioRef={audioRef}
                 isPlaying={isPlaying}
                 />)}
            </div>
        </div>
    )
}
export default Library;