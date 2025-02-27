import { PlayBtn } from "@components/player/controlers/PlayBtn";
import { stateStore } from "@components/player/Player";
import type { Playlist, Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { convertSeconds } from "src/utils/timeConversions";

interface Props {
  song: Song;
  playlist: Playlist;
  index: number;
  addedAt: Date;
}
export function SongItem({ song, playlist, index, addedAt }: Props) {
  const duration = convertSeconds(song.duration);
  const { currentSong, isPlaying } = useStore(stateStore);

  //evitar discrepancias y problemas de hidratación con el servidor.
  const [clientIsPlaying, setClientIsPlaying] = useState<boolean>(false);
  useEffect(() => {
    setClientIsPlaying(isPlaying);
  }, [isPlaying]);

  const handleChangeSong = () => {
    stateStore.set({
      isPlaying: !isPlaying,
      currentSong: song,
      playlist: playlist,
    });
  };

  return (
    <tr className="group">
      <td className="w-14 h-14 group">
        <button
          className={`${!!(currentSong?.id === song.id && clientIsPlaying) ? "hidden" : "block"} group-hover:hidden m-auto`}
          onClick={handleChangeSong}
        >
          {index}
        </button>
        <PlayBtn
          className={`${!!(currentSong?.id === song.id && clientIsPlaying) ? "block" : "hidden"} group-hover:block m-auto`}
          handleChange={handleChangeSong}
          isPlaying={!!(currentSong?.id === song.id && clientIsPlaying)}
        />
      </td>
      <td className="p-2 min-w-[200px] flex items-center gap-2 overflow-hidden">
        <img src={song.album?.cover} className="w-[42px] h-[42px]" />
        <div>
          <p
            className={`${currentSong?.id === song.id ? "text-green-400" : "text-[var(--primary-font)]"}`}
          >
            {song.name}
          </p>{" "}
          <p className="text-[var(--secundary-font)] group-hover:text-[var(--primary-font)]">
            {song.artists.join(", ")}
          </p>
        </div>
      </td>
      <td className="p-2 text-[var(--secundary-font)] group-hover:text-[var(--primary-font)]">
        {song.album?.name}
      </td>
      <td className="p-2 hidden sm:table-cell text-[var(--secundary-font)] group-hover:text-[var(--primary-font)]">
        {addedAt ? dayjs(addedAt).format("DD MMMM YYYY") : "-"}
      </td>
      <td className="p-2 hidden sm:table-cell text-[var(--secundary-font)] group-hover:text-[var(--primary-font)] text-center">{`${duration.mins}:${duration.secs}`}</td>
    </tr>
  );
}
