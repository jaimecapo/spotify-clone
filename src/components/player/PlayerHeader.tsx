import type { Song } from "@lib/data";

interface Props {
  currentSong: Song | null;
}
export function PlayerHeader({ currentSong }: Props) {
  return (
    <div
      id="player-song-head"
      className=" flex flex-row justify-start items-center gap-2"
    >
      <div className="h-18 w-18 bg-[var(--interface-thinner-color)]">
        {currentSong ? (
          <img src={currentSong.album?.cover} alt="Album cover" />
        ) : undefined}
      </div>
      {currentSong ? (
        <div className="lg:flex-col justify-center hidden lg:flex">
          <p>{currentSong.name}</p>
          <p className="text-[var(--secundary-font)]">
            {currentSong.artists.join(",")}
          </p>
        </div>
      ) : undefined}
    </div>
  );
}
