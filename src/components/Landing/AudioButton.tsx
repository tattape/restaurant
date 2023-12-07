import { PauseCircleIcon, PlayCircleIcon } from "@heroicons/react/24/solid";
import React, { useRef, useState } from "react";

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
    <div>
      {isPlaying ? (
        <PauseCircleIcon
          className="w-[50px] text-white opacity-50 hover:opacity-100"
          onClick={handlePlayPause}
        />
      ) : (
        <PlayCircleIcon
          className="w-[50px] text-white opacity-50 hover:opacity-100"
          onClick={handlePlayPause}
        />
      )}
      <audio
        controls
        loop
        autoPlay
        className="hidden"
        ref={audioRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/foodmusic.mp3" type="audio/mpeg" />
      </audio>
    </div>
  );
}
