import type { Song } from "@lib/data";
import { useEffect, useState, type Ref } from "react";
import Slider from "../Slider";
import { convertSeconds } from "src/utils/timeConversions";

interface Props {
  currentSong: Song | null;
  audio: HTMLAudioElement | null;
  isPlaying: boolean;
}

export function ProgressController({ audio, currentSong, isPlaying }: Props) {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!audio) return;
    {
      //evento que ejecuta el componente <audio/> mientras ejecuta el audio.
      audio.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentTime, isPlaying]);

  const handleTimeUpdate = () => {
    if (audio) setCurrentTime(audio?.currentTime);
  };

  if (!currentSong) return emptyProgressBar;

  const formatedCurrent = convertSeconds(parseInt(currentTime.toFixed(0)));
  const formatedMax = convertSeconds(currentSong?.duration);
  return (
    <div className="flex w-full gap-2">
      <p>{`${formatedCurrent.mins}:${formatedCurrent.secs}`}</p>
      <Slider
        className="w-full"
        current={currentTime}
        min={0}
        max={currentSong.duration}
        id="current-song-time"
        name="current-song-time"
        onChange={(value) => {
          if (audio) audio.currentTime = value;
        }}
      />
      <p>{`${formatedMax.mins}:${formatedMax.secs}`}</p>
    </div>
  );
}

//respuesta en caso de no tener canción.
const emptyProgressBar = (
  <div className="flex w-full gap-2">
    <p>00:00</p>
    <Slider
      max={0}
      min={0}
      current={0}
      id="current-song-time"
      disabled={true}
      name="current-song-time"
    />
    <p>00:00</p>
  </div>
);
