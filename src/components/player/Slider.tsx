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
    <input
      type="range"
      value={current}
      name={name}
      min={min}
      max={max}
      id={id}
      disabled={disabled}
      className={`bg-[var(--interface-color)] hover:bg-[var(--interface-focus-color)]  rounded-4xl appearance-none ${className}`}
      onChange={(value) => onChange(parseInt(value.currentTarget.value))}
    />
  );
}
