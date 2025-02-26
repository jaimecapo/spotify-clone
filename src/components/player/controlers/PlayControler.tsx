interface Props {
  isPlaying: boolean;
  handleChange: () => void;
}

export function PlayerController({ isPlaying, handleChange }: Props) {
  return (
    <button
      type="button"
      className="btn p-3 bg-[var(--secundary-font)] hover:bg-[var(--primary-font)] hover:scale-105 transition-[scale_0.2s_ease] rounded-[100%]"
      onClick={handleChange}
    >
      <span className="e-9640-baseline e-9640-overflow-wrap-anywhere e-9640-button-primary__inner encore-inverted-light-set e-9640-button-icon-only--small">
        <span className="e-9640-button__icon-wrapper fill-[var(--background-color)] ">
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
    data-encore-id="icon"
    role="img"
    aria-hidden="true"
    className="e-9640-icon"
    viewBox="0 0 16 16"
    width={24}
    height={24}
  >
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);
