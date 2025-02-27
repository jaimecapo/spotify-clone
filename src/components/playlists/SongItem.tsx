import { PlayerController } from "@components/player/controlers/PlayControler";
import { stateStore } from "@components/player/Player";
import type { Song } from "@lib/data";
import { useStore } from "@nanostores/react";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { convertSeconds } from "src/utils/timeConversions";

interface Props {
  song: Song;
  index: number;
  addedAt: Date;
}
export function SongItem({ song, index, addedAt }: Props) {
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
    });
  };

  return (
    <tr>
      <td className="w-14 h-14 group">
        <button
          className={`${!!(currentSong?.id === song.id && clientIsPlaying) ? "hidden" : "block"} group-hover:hidden m-auto`}
          onClick={handleChangeSong}
        >
          {index}
        </button>
        <PlayerController
          className={`${!!(currentSong?.id === song.id && clientIsPlaying) ? "block" : "hidden"} group-hover:block m-auto`}
          handleChange={handleChangeSong}
          isPlaying={!!(currentSong?.id === song.id && clientIsPlaying)}
        />
      </td>
      <td className="p-2 flex items-center gap-2">
        <img src={song.album?.cover} className="w-[42px] h-[42px]" />
        <div>
          <p>{song.name}</p> <p>{song.artists.join(", ")}</p>
        </div>
      </td>
      <td className="p-2">{song.album?.name}</td>
      <td className="p-2">
        {addedAt ? dayjs(addedAt).format("DD MMMM YYYY") : "-"}
      </td>
      <td className="p-2">{`${duration.mins}:${duration.secs}`}</td>
    </tr>
  );
}
