import type { Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useEffect, useRef } from "react";
import { ProgressController } from "./controlers/ProgressControler";
import { PlayerHeader } from "./PlayerHeader";
import { VolumeController } from "@components/player/controlers/VolumeControler";
import { PlayerController } from "@components/player/controlers/PlayControler";

export const stateStore = atom<{
  isPlaying: boolean;
  currentSong: Song | null;
}>({
  isPlaying: false,
  currentSong: null,
});

export default function Player() {
  const state = useStore(stateStore);
  const { isPlaying, currentSong } = state;
  const audioRef = useRef<HTMLAudioElement>(null);

  //Q cambia el src del audio en cuanto se cambia de canción.
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = currentSong ? `../audios/${currentSong.audio}` : "";
  }, [currentSong]);

  //hook que en caso de haber cancion y cambiar el estado `playing` para reproducirlo
  useEffect(() => {
    if (!audioRef.current) return;

    if (state.isPlaying) {
      audioRef.current.play();
    } else audioRef.current.pause();
  }, [isPlaying]);

  const handleChange = () => {
    stateStore.set({ ...state, isPlaying: !state.isPlaying });
  };

  return (
    <div className="grid grid-cols-3 items-center w-full h-full">
      <audio ref={audioRef} id="audio" />

      <PlayerHeader currentSong={currentSong} />
      <div
        id="player-player"
        className="flex flex-col gap-2 justify-center items-center"
      >
        <PlayerController isPlaying={isPlaying} handleChange={handleChange} />
        <ProgressController
          currentSong={currentSong}
          audio={audioRef.current}
          isPlaying={isPlaying}
        />
      </div>
      <VolumeController audio={audioRef.current} />
    </div>
  );
}
