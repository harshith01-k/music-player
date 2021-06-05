import React from "react";
import "../styles/library.css";
const LibrarySongs = ({ son,songs,setCurrentSong,id,audioRef,isPlaying }) => {
    const changeSong =()=>
    {
        const selectedSong = songs.filter((state) => state.id === id)
        console.log(id)
        console.log(selectedSong)
        setCurrentSong(selectedSong[0])
        audioRef.current.play()
        if(isPlaying)
        {
          const playProm = audioRef.current.play();
          if(playProm !== undefined)
          {
            playProm.then((audio)=>{
              audioRef.current.play()
            })
          }
        }
    }
  return (
    <div onClick={changeSong} className="library-song">
      <img alt={son.name} src={son.cover} />
      <div className="song-description">
        <h3>{son.name}</h3>
        <h4>{son.artist}</h4>
      </div>
    </div>
  );
};
export default LibrarySongs;
