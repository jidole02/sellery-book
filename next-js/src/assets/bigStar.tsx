import { COLOR } from "./../../styles/index";

interface props {
  check: boolean;
  callback(): void;
}

export default function BigStarIcon({ check, callback }: props) {
  return (
    <svg
      onClick={callback}
      style={{ cursor: "pointer" }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="54.464"
      height="51.741"
      viewBox="0 0 54.464 51.741"
    >
      <defs>
        <linearGradient
          id="linear-gradient"
          x1="0.5"
          x2="0.5"
          y2="1"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color={check ? COLOR.sub : "#d6d6d6"} />
          <stop offset="1" stop-color={check ? COLOR.sub : "#dfdfdf"} />
        </linearGradient>
      </defs>
      <path
        id="Icon_material-star"
        data-name="Icon material-star"
        d="M30.232,44.583,47.061,54.741,42.6,35.6,57.464,22.716l-19.58-1.661L30.232,3,22.58,21.055,3,22.716,17.869,35.6,13.4,54.741Z"
        transform="translate(-3 -3)"
        fill="url(#linear-gradient)"
      />
    </svg>
  );
}
