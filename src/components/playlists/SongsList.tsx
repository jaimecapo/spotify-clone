import { type Playlist } from "@lib/data";
import { SongItem } from "@components/playlists/SongItem";

interface Props {
  songs: Playlist["songs"];
}
export function SongsList({ songs }: Props) {
  return (
    <table className="table-auto w-full text-left ">
      <thead className="font-bold border-b-1">
        <tr>
          <th className="p-3">#</th>
          <th className="p-3">Titulo</th>
          <th className="p-3">Album</th>
          <th className="p-3">Añadido</th>
          <th className="p-3">Duración</th>
        </tr>
      </thead>
      <tbody className="">
        {songs.map((song, index) => (
          <SongItem
            song={song.song}
            index={index}
            addedAt={song.addedAt}
            key={index}
          />
        ))}
      </tbody>
    </table>
  );
}
