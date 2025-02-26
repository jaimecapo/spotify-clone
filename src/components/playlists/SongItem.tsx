import { currentSong } from "@components/Player";
import type { Song } from "@lib/data";
import dayjs from "dayjs";

interface Props {
  song: Song;
  index: number;
  addedAt: Date;
}
export function SongItem({ song, index, addedAt }: Props) {
  const convertirAMinutos = (duration: number) => {
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.round((duration % 60000) / 1000);

    return parseFloat(`${minutes}.${seconds}`);
  };

  const duration = convertirAMinutos(song.duration);

  const handleChangeSong = () => {
    console.log("cambiando");
    currentSong.set(song);
  };

  return (
    <tr>
      <td className="p-2">
        <button onClick={handleChangeSong}>{index}</button>
      </td>
      <td className="p-2 flex items-center gap-2">
        <img src={song.album?.cover} className="w-[42px] h-[42px]" />
        <div>
          <p>{song.name}</p> <p>{song.artists.join(", ")}</p>
        </div>
      </td>
      <td className="p-2">{song.album?.name}</td>
      <td className="p-2">{dayjs(addedAt).format("DD MMMM YYYY")}</td>
      <td className="p-2">{duration.toFixed(2).replace(".", ":")}</td>
    </tr>
  );
}
