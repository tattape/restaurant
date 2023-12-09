import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import React, { useEffect, useRef, useState } from "react";

export default function AudioButton() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<any>(null);

  const handlePlayPause = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
      setIsPlaying(true);
    } else {
      audioRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <button
      onClick={handlePlayPause}
      className="w-[50px] h-[50px] opacity-50 hover:opacity-100"
    >
      {isPlaying ? (
        <PauseCircleIcon className="text-white" />
      ) : (
        <PlayCircleIcon className="text-white" />
      )}
      <audio
        controls
        loop
        className="hidden"
        autoPlay
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://github.com/tattape/restaurant/blob/master/public/foodmusic.mp3?raw=true"
          type="audio/mpeg"
        />
      </audio>
    </button>
  );
}
