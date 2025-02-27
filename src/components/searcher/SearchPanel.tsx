import { SONGS, type Song } from "@lib/data";
import { useMemo, useState } from "react";
import BtnLupa from "../BtnLupa";
import { SearchList } from "./SearchList";

export function SearchInput() {
  const [termino, setTermino] = useState("");
  const [hidden, setHidden] = useState(true);

  //memorizado para que no se calcule a menos q cambies el termino.
  const searchOptions: Song[] = useMemo(
    () =>
      SONGS.filter((song) => {
        const normalizeString = (str: string) =>
          str
            .normalize("NFD") // Descompone caracteres acentuados (e.g., "é" → "e" + "~")
            .replace(/[\u0300-\u036f]/g, "") // Elimina los diacríticos (acentos)
            .toLowerCase();

        return normalizeString(song.song.name).includes(
          normalizeString(termino),
        );
      })
        .slice(0, 5)
        .map((song) => song.song),
    [termino],
  );

  return (
    <form
      action="#"
      method="get"
      className="relative bg-[var(--interface-color)] hover:bg-[var(--interface-focus-color)] p-2 pl-3 pr-3 rounded-4xl flex flex-row items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
      onBlur={(e) => {
        //onBlur se ejecuta cuando sales del elemento.
        //si le foco no esta en el form, ocultamos le Searchlist.
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setHidden(true);
        }
      }}
    >
      <label htmlFor="buscador" className="flex">
        <BtnLupa height={24} />
      </label>
      <input
        type="text"
        className="p-1 w-[100px] sm:w-[300px] lg:w-[400px]"
        alt="Buscador"
        id="buscador"
        name="buscador"
        value={termino}
        onChange={(value) => setTermino(value.currentTarget.value)}
        placeholder="¿Qué quieres reproducir?..."
        onFocus={() => setHidden(false)}
      />
      <button
        className="btn"
        type="button"
        title="searche-btn"
        onClick={() => setTermino("")}
      >
        <span
          aria-hidden="true"
          className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
        >
          <svg
            height="24"
            data-encore-id="icon"
            role="img"
            aria-hidden="true"
            className="Svg-sc-ytk21e-0 bneLcE e-9541-icon clickable"
            viewBox="0 0 24 24"
          >
            <path d="M15 15.5c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z"></path>
            <path d="M1.513 9.37A1 1 0 0 1 2.291 9h19.418a1 1 0 0 1 .979 1.208l-2.339 11a1 1 0 0 1-.978.792H4.63a1 1 0 0 1-.978-.792l-2.339-11a1 1 0 0 1 .201-.837zM3.525 11l1.913 9h13.123l1.913-9H3.525zM4 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v4h-2V3H6v3H4V2z"></path>
          </svg>
        </span>
      </button>
      <SearchList songs={searchOptions} className={hidden ? "hide" : ""} />
    </form>
  );
}
