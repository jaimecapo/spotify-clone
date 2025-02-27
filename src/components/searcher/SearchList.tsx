import type { Song } from "@lib/data";
import { SearchOption } from "./SearchOptions";

interface Props {
  songs: Song[];
  className: string;
}

//Modal con los resultados de la búsqueda.
export function SearchList({ songs, className }: Props) {
  return (
    <div
      className={`${className} block ${className.includes("hide") ? "hidden" : ""} absolute top-[105%] w-full left-0 p-[1.5em_0.5em_0.5em_0.5em] md:p-[3em_1em_1em_1em] bg-[var(--interface-color)] rounded-2xl -z-[-2]`}
      id="modal-searched-options"
      style={{
        boxShadow:
          "rgba(50, 50, 50, 0.55) 0px 50px 100px -20px, rgba(0, 0, 0, 0.5) 0px 30px 60px -30px",
      }}
    >
      <h3 className="font-bold">Resultado (5 primeros)</h3>
      <ul>
        {songs.map((song, index) => (
          <SearchOption song={song} key={index} />
        ))}
      </ul>
    </div>
  );
}
