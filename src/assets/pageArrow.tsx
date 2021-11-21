export default function PageArrowIcon({ deg, callback }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6.222"
      height="9.819"
      viewBox="0 0 6.222 9.819"
      style={{ transform: `rotate(${deg}deg)`, cursor: "pointer" }}
      onClick={callback}
    >
      <path
        id="Icon_ionic-ios-arrow-back"
        data-name="Icon ionic-ios-arrow-back"
        d="M13.126,11.1,17.244,7.39a.652.652,0,0,0,0-.991.843.843,0,0,0-1.1,0L11.477,10.6a.652.652,0,0,0-.023.968l4.685,4.236a.844.844,0,0,0,1.1,0,.652.652,0,0,0,0-.991Z"
        transform="translate(-11.251 -6.194)"
      />
    </svg>
  );
}
