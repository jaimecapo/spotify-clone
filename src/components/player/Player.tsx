import type { Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useEffect, useRef } from "react";
import { ProgressController } from "./controlers/ProgressControler";
import { PlayerHeader } from "./PlayerHeader";
import { VolumeController } from "@components/player/controlers/VolumeControler";
import { PlayerController } from "@components/player/controlers/PlayControler";

export const stateSong = atom<{
  isPlaying: boolean;
  volumen: number;
  currentSong: Song | null;
}>({
  isPlaying: false,
  volumen: 1,
  currentSong: null,
});

export default function Player() {
  const state = useStore(stateSong);
  const { isPlaying, currentSong, volumen } = state;
  const audio = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audio.current) {
      audio.current.src = currentSong ? `../audios/${currentSong.audio}` : "";
    }
  }, [currentSong]);

  const handleChange = () => {
    stateSong.set({ ...state, isPlaying: !state.isPlaying });

    //reproducir o parar la música
    if (audio.current) {
      if (!state.isPlaying) audio.current.play();
      else audio.current.pause();
    }
  };

  return (
    <div className="grid grid-cols-3 items-center w-full h-full">
      <audio ref={audio} id="audio" />

      <PlayerHeader currentSong={currentSong} />
      <div
        id="player-player"
        className="flex flex-col gap-2 justify-center items-center"
      >
        <PlayerController isPlaying={isPlaying} handleChange={handleChange} />
        <ProgressController
          currentSong={currentSong}
          audio={audio.current}
          isPlaying={isPlaying}
        />
      </div>
      <VolumeController audio={audio.current} />
    </div>
  );
}
