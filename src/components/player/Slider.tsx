interface Props {
  className?: string;
  current: number;
  id: string;
  name: string;
  min: number;
  max: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
}

//Slider para el general para utilizar en el volumen y la barra de tiempo.
export default function Slider({
  id,
  current,
  className = "",
  name,
  min,
  max,
  disabled = false,
  onChange = () => {},
}: Props) {
  return (
    <div className={className}>
      <label htmlFor={id} className="hidden">
        Slider
      </label>
      <input
        type="range"
        value={current}
        name={name}
        min={min}
        max={max}
        id={id}
        disabled={disabled}
        alt="slider"
        className={`bg-[var(--interface-color)] hover:bg-[var(--interface-focus-color)]  rounded-4xl appearance-none ${className}`}
        onChange={(value) => onChange(parseInt(value.currentTarget.value))}
      />
    </div>
  );
}
