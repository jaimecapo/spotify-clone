interface Props {
  className?: string;
  customStyle?: boolean;
  isPlaying: boolean;
  disabled?: boolean;
  fillColor?: string;
  strokeColor?: string;
  handleChange: () => void;
}

export function PlayBtn({
  isPlaying,
  customStyle = false,
  disabled = false,
  fillColor = "",
  strokeColor = "",
  handleChange,
  className,
}: Props) {
  return (
    <button
      type="button"
      className={
        customStyle
          ? `btn ${disabled} ${className}`
          : `btn p-3 w-fit h-fit bg-[var(--secundary-font)] hover:bg-[var(--primary-font)] hover:scale-105 transition-[scale_0.2s_ease] rounded-[100%] ${disabled ? "opacity-50" : ""} ${className}`
      }
      disabled={disabled}
      onClick={handleChange}
    >
      <span className="">
        <span
          className={`${fillColor ? fillColor : "fill-[var(--background-color)]"} ${strokeColor ? strokeColor : ""}`}
        >
          {!isPlaying ? <Play /> : <Pause />}
        </span>
      </span>
    </button>
  );
}

const Play = () => (
  <svg
    data-encore-id="icon-play-btn"
    role="img"
    viewBox="0 0 16 16"
    width={20}
    height={20}
  >
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

const Pause = () => (
  <svg
    data-encore-id="icon-play-btn"
    role="img"
    viewBox="0 0 16 16"
    width={20}
    height={20}
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);
