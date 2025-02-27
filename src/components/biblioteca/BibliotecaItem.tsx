import { PlayBtn } from "@components/player/controlers/PlayBtn";
import { stateStore } from "@components/player/Player";
import type { Playlist } from "@lib/data";
import { useStore } from "@nanostores/react";

type Props = {
  playlist: Playlist;
};

export default function BibliotecaItem({ playlist }: Props) {
  const state = useStore(stateStore);

  const handlePlay = () => {};

  const isPlaying = !!(
    state.playlist &&
    state.playlist.id === playlist.id &&
    state.isPlaying
  );

  return (
    <li className="playlist hover:bg-[var(--interface-focus-color)] rounded p-2">
      <a
        href={`/playlists/${playlist.id}`}
        title="open playlist"
        className="group relative flex flex-row items-center gap-2"
      >
        <img
          src={playlist.img}
          alt={`Imagen: ${playlist.name}`}
          className="w-[48px] h-[48px] rounded object-cover"
        ></img>
        <PlayBtn
          handleChange={handlePlay}
          customStyle={true}
          isPlaying={isPlaying}
          fillColor={"fill-white"}
          className="absolute hidden top-0 left-0 group-hover:flex justify-center items-center w-[48px] h-[48px] bg-black/50 rounded"
        />

        <div className="hidden lg:block">
          <h3 className="font-normal ">{playlist.name}</h3>
          <div className="flex gap-2 text-[var(--secundary-font)] text-[0.90em]">
            <p>
              {playlist.isAlbum ? "Album" : "Lista"} · <b>{playlist.author}</b>
            </p>
            <p>{playlist.songs.length} canciones</p>
          </div>
        </div>
      </a>
    </li>
  );
}
