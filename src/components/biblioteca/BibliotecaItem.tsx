import type { Playlist } from "@lib/data";

type Props = {
  playlist: Playlist;
};

export default function BibliotecaItem({ playlist }: Props) {
  return (
    <li className="playlist hover:bg-[var(--interface-focus-color)] rounded p-2">
      <a
        href={`/playlists/${playlist.id}`}
        className="group relative flex flex-row items-center gap-2"
      >
        <img
          src={playlist.img}
          alt={playlist.name}
          className="w-[48px] h-[48px] rounded"
        ></img>
        <button className="absolute hidden top-0 left-0 group-hover:flex justify-center items-center w-[48px] h-[48px] fill-white bg-black/50 rounded">
          <span className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw">
            <svg
              data-encore-id="icon"
              role="img"
              height={20}
              className="Svg-sc-ytk21e-0 bneLcE e-9541-icon"
              viewBox="0 0 24 24"
            >
              <path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
            </svg>
          </span>
        </button>

        <div>
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
