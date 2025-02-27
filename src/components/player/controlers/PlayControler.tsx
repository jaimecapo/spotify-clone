import type { Playlist } from "@lib/data";
import { NextBtn } from "./NextBtn";
import { PlayBtn } from "./PlayBtn";
import { stateStore, type State } from "../Player";

interface Props {
  audioRef: HTMLAudioElement | null;
  isPlaying: boolean;
  playlist: Playlist | null;
  state: State;
  position: number | null;
}

//Controles de pause/play y cambio de canción.
export function PlayerController({
  isPlaying,
  state,
  playlist,
  audioRef,
  position,
}: Props) {
  const handlePlay = () => {
    stateStore.set({ ...state, isPlaying: !state.isPlaying });
  };

  const handleNext = () => {
    if (playlist && position !== null)
      stateStore.set({
        ...state,
        currentSong: playlist.songs[position + 1].song,
        isPlaying: true,
      });
  };

  const handlePrevius = () => {
    if (playlist && position)
      stateStore.set({
        ...state,
        currentSong: playlist.songs[position - 1].song,
        isPlaying: true,
      });
  };

  return (
    <div className="flex gap-2 items-center">
      <NextBtn
        type="previus"
        id="previus-btn"
        disabled={!playlist || position === null || position === 0}
        onChange={handlePrevius}
      />
      <PlayBtn
        disabled={!audioRef || !audioRef.src}
        isPlaying={isPlaying}
        handleChange={handlePlay}
        className=""
      />
      <NextBtn
        type="next"
        id="next-btn"
        disabled={
          !playlist ||
          position === null ||
          position === playlist.songs.length - 1
        }
        onChange={handleNext}
      />
    </div>
  );
}
