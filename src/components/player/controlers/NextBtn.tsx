interface Props {
  className?: string;
  type: "next" | "previus";
  id: string;
  disabled?: boolean;
  onChange?: () => void;
}

export function NextBtn({
  className = "",
  type,
  id,
  disabled = false,
  onChange,
}: Props) {
  return (
    <button
      id={id}
      disabled={disabled}
      type="button"
      title="next-btn"
      className={`btn w-fit h-fit p-2 bg-[var(--secundary-font)] hover:bg-[var(--primary-font)] hover:scale-105 transition-[scale_0.2s_ease] rounded-[100%] ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <span aria-hidden="true" className="e-9640-button__icon-wrapper">
        <svg
          data-encore-id="icon"
          role="img"
          aria-hidden="true"
          viewBox="0 0 16 16"
          width={16}
          height={16}
          style={{
            transform: type == "next" ? "scaleX(-1)" : "none", // Voltea solo cuando "next"
          }}
          onClick={onChange}
        >
          <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
        </svg>
      </span>
    </button>
  );
}
