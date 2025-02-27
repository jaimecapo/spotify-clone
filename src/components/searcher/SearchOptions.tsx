import { PlayBtn } from "@components/player/controlers/PlayBtn";
import { stateStore } from "@components/player/Player";
import type { Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";

interface Props {
  song: Song;
}
export function SearchOption({ song }: Props) {
  const { isPlaying, currentSong } = useStore(stateStore);

  const [clientIsPlaying, setClientIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    setClientIsPlaying(isPlaying);
  }, [isPlaying]);

  const handlePlay = () => {
    stateStore.set({
      isPlaying: !clientIsPlaying,
      playlist: null,
      currentSong: song,
    });
  };

  return (
    <ul
      className="group grid grid-cols-[auto_1fr] gap-5 w-full p-2 md:p-4 items-center bg-[var(--interface-color)] hover:bg-[var(--interface-focus-color)] rounded "
      onClick={handlePlay}
    >
      <div className="relative group">
        <img
          src={song.album?.cover}
          alt={`Imagen: ${song.name}`}
          width={65}
          height={65}
          className=" h-fit rounded object-cover"
        />
        <PlayBtn
          customStyle={true}
          isPlaying={!!(currentSong && currentSong.id === song.id && isPlaying)}
          fillColor={"fill-white"}
          className="absolute hidden top-0 left-0 group-hover:flex justify-center items-center w-[65px] h-[65px] bg-black/50 rounded"
        />
      </div>

      <div>
        <p
          className={`${currentSong?.id === song.id ? "text-green-400" : "text-[var(--primary-font)]"}`}
        >
          {song.name}
        </p>
        <p className="hidden md:block text-wrap">{song.album?.name}</p>
      </div>
    </ul>
  );
}
