type Props = {
  height: number;
  onClick?: () => any;
};

//Botón de busqueda.
export default function btnLupa({ height }: Props) {
  return (
    <button className="btn" type="button" title="find-btn">
      <span
        aria-hidden="true"
        className="IconWrapper__Wrapper-sc-16usrgb-0 hYdsxw"
      >
        <svg
          data-encore-id="icon"
          role="img"
          height={height}
          aria-hidden="true"
          className={`Svg-sc-ytk21e-0 bneLcE e-9541-icon clickable`}
          viewBox="0 0 24 24"
        >
          <path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132C21.1834 22.5226 21.8166 22.5226 22.2071 22.132C22.5976 21.7415 22.5976 21.1083 22.2071 20.7178L17.8634 16.3741C19.1616 14.7849 19.94 12.7634 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"></path>
        </svg>
      </span>
    </button>
  );
}
