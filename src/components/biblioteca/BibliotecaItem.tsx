import type { Playlist } from "@lib/data";

type Props = {
  playlist: Playlist;
};

export default function BibliotecaItem({ playlist }: Props) {
  return (
    <li>
      <a href={`/playlists/${playlist.id}`}>asdf</a>
    </li>
  );
}
