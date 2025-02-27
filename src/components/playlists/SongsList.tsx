import { type Playlist } from "@lib/data";
import { SongItem } from "@components/playlists/SongItem";

interface Props {
  songs: Playlist["songs"];
}
export function SongsList({ songs }: Props) {
  return (
    <table className="table-auto min-w-fit w-full text-left">
      <thead className="font-bold border-b-1">
        <tr>
          <th className="p-3 m-auto text-center">#</th>
          <th className="p-3">Titulo</th>
          <th className="p-3">Album</th>
          <th className="p-3 hidden sm:table-cell">Añadido</th>
          <th className="p-3 hidden sm:table-cell text-center">Duración</th>
        </tr>
      </thead>
      <tbody>
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
