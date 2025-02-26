import type { Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import { atom } from "nanostores";
import { useMemo } from "react";

export const currentSong = atom<Song | null>(null);

export default function Player() {
  const song = useStore(currentSong);

  const audioRef = useMemo(() => {
    console.log(song);
    return song ? `../audios/${song?.audio}` : undefined;
  }, [song]);

  return (
    <div className="flex justify-between items-center w-full h-full">
      <div id="player-song-head" className=" flex flex-row gap-2">
        <div className="h-18 w-18 bg-[var(--interface-thinner-color)]">
          {song ? <img src={song.album?.cover} alt="Album cover" /> : undefined}
        </div>
        {song ? (
          <div className="lg:flex-col justify-center hidden lg:flex">
            <p>{song.name}</p>
            <p>{song.artists.join(",")}</p>
          </div>
        ) : undefined}
      </div>
      <div id="player-player">
        <audio src={audioRef} controls={true}></audio>
      </div>
      <div id="player-sound-controls">var</div>
    </div>
  );
}
