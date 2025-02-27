import type { Playlist, Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useEffect, useRef } from "react";
import { ProgressController } from "./controlers/ProgressControler";
import { PlayerHeader } from "./PlayerHeader";
import { VolumeController } from "@components/player/controlers/VolumeControler";
import { PlayerController } from "@components/player/controlers/PlayControler";

export type State = {
  isPlaying: boolean;
  currentSong: Song | null;
  playlist: Playlist | null;
};

export const stateStore = atom<State>({
  isPlaying: false,
  currentSong: null,
  playlist: null,
});

export default function Player() {
  const state = useStore(stateStore);
  const { isPlaying, playlist, currentSong } = state;
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
  }, [isPlaying, currentSong]);

  const currentPosition =
    playlist && currentSong
      ? playlist.songs.findIndex((item) => item.song.id === currentSong.id)
      : null;

  return (
    <div className="grid grid-cols-3 items-center w-full h-full">
      <audio ref={audioRef} id="audio" />

      <PlayerHeader currentSong={currentSong} />
      <div
        id="player-player"
        className="flex flex-col gap-2 justify-center items-center"
      >
        <PlayerController
          audioRef={audioRef.current}
          isPlaying={isPlaying}
          playlist={playlist}
          position={currentPosition}
          state={state}
        />
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
