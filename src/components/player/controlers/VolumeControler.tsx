import { useState } from "react";
import Slider from "../Slider";

interface Props {
  audio: HTMLAudioElement | null;
}

export function VolumeController({ audio }: Props) {
  const [currentVolumen, setCurrentVolumen] = useState(20);

  if (!audio) return emptyVolumen(currentVolumen);

  return (
    <div
      id="player-sound-controls"
      className={`flex flex-row justify-end items-center`}
    >
      <Slider
        className=""
        current={currentVolumen}
        min={0}
        max={100}
        id="volume-control"
        name="volume-control"
        disabled={false}
        onChange={(value) => {
          setCurrentVolumen(value);
          audio.volume = value / 100;
        }}
      />
    </div>
  );
}

//respuesta en caso de no tener canción.
const emptyVolumen = (currentVolumen: number) => (
  <div
    id="player-sound-controls"
    className={`flex flex-row justify-end items-center`}
  >
    <Slider
      current={currentVolumen}
      min={0}
      max={100}
      id="volume-control"
      name="volume-control"
      disabled={true}
    />
  </div>
);
