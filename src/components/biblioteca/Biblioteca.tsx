import { PLAYLISTS } from "@lib/data";
import BibliotecaItem from "./BibliotecaItem";
import { useState } from "react";
import BtnLupa from "@components/BtnLupa";

export default function Biblioteca() {
  return (
    <div className="h-full grid grid-cols-1 grid-rows-[auto_1fr] gap-2">
      <header className="flex flex-row gap-2 p-4 pb-2 items-center ">
        <button className="btn">
          <span
            aria-hidden="true"
            className="IconWrapper__Wrapper-sc-16usrgb-0 jEDcnm"
          >
            <svg
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="Svg-sc-ytk21e-0 bneLcE e-9541-icon clickable"
              viewBox="0 0 24 24"
              height={"32px"}
            >
              <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
            </svg>
          </span>
        </button>
        <h2 className="font-medium text-[1.1em] text-[var(--secundary-font)]">
          Tu Biblioteca
        </h2>
      </header>
      <section className="playlists">
        <ul className="flex flex-col p-2">
          <div className="playlists-filters grid grid-cols-[auto_1fr] gap-2 p-2 items-center">
            <BtnLupa
              height={20}
              onClick={() => {
                return;
              }}
            />
            <input
              className="rounded-[5px]"
              type="text"
              name="termino"
              id="termino"
            />
          </div>
          {PLAYLISTS.map((pl) => (
            <BibliotecaItem playlist={pl} />
          ))}
        </ul>
      </section>
    </div>
  );
}
