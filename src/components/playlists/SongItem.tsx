import { stateSong } from "@components/player/Player";
import type { Song } from "@lib/data";
import dayjs from "dayjs";
import { convertSeconds } from "src/utils/timeConversions";

interface Props {
  song: Song;
  index: number;
  addedAt: Date;
}
export function SongItem({ song, index, addedAt }: Props) {
  const duration = convertSeconds(song.duration);

  const handleChangeSong = () => {
    stateSong.set({
      isPlaying: false,
      volumen: 1,
      currentSong: song,
    });
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
      <td className="p-2">{`${duration.mins}:${duration.secs}`}</td>
    </tr>
  );
}
