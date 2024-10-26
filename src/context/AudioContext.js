"use client";

import { createContext, useRef, useState } from "react"

const AudioContext=createContext();

 const AudioProvider=({children})=>{
    const [isPlaying, setIsPlaying]=useState(false);
    const audioRef=useRef(new Audio("/song.mp3"));

    audioRef.current.volume=0.1;

    const toggleMusic=()=>{
        console.log(isPlaying);
        
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    return(
        <AudioContext.Provider value={{isPlaying,toggleMusic}}>
            {children}
        </AudioContext.Provider>
    )
}

export {AudioContext, AudioProvider};