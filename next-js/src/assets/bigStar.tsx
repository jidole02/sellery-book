import { COLOR } from "./../../styles/index";
interface props {
  check: boolean;
  callback(): void;
}

export default function BigStarIcon({ check, callback }: props) {
  return (
    <>
      {check ? (
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
              <stop offset="0" stopColor={COLOR.sub} />
              <stop offset="1" stopColor={COLOR.sub} />
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
      ) : (
        <svg
          onClick={callback}
          style={{ cursor: "pointer" }}
          xmlns="http://www.w3.org/2000/svg"
          width="55.721"
          height="51.741"
          viewBox="0 0 55.721 51.741"
        >
          <path
            id="Icon_ionic-ios-star-outline"
            data-name="Icon ionic-ios-star-outline"
            d="M55.856,21.285h-18.3L32,4.693a2.015,2.015,0,0,0-3.781,0L22.66,21.285H4.24a2,2,0,0,0-1.99,1.99,1.462,1.462,0,0,0,.037.336,1.912,1.912,0,0,0,.833,1.405l15.037,10.6L12.387,52.392a2,2,0,0,0,.684,2.239,1.925,1.925,0,0,0,1.119.485,2.438,2.438,0,0,0,1.244-.448L30.11,44.208l14.676,10.46a2.331,2.331,0,0,0,1.244.448,1.787,1.787,0,0,0,1.107-.485,1.971,1.971,0,0,0,.684-2.239L42.051,35.613l14.913-10.7.361-.311a2.086,2.086,0,0,0,.647-1.331A2.106,2.106,0,0,0,55.856,21.285ZM40.036,32.79a3.493,3.493,0,0,0-1.269,3.955l3.744,10.908a.5.5,0,0,1-.759.572L32.125,41.36a3.475,3.475,0,0,0-2.027-.647,3.411,3.411,0,0,0-2.015.647l-9.627,6.853a.5.5,0,0,1-.759-.572l3.744-10.908a3.5,3.5,0,0,0-1.281-3.98l-10.075-7.1a.5.5,0,0,1,.286-.908H22.648a3.478,3.478,0,0,0,3.3-2.376L29.625,11.4a.5.5,0,0,1,.945,0l3.682,10.97a3.478,3.478,0,0,0,3.3,2.376h12.1a.492.492,0,0,1,.286.9Z"
            transform="translate(-2.25 -3.375)"
            fill="#dadada"
          />
        </svg>
      )}
    </>
  );
}
