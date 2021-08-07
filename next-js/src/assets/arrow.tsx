interface props {
  callback(): void;
  direction: boolean;
}

export default function Arrow({ callback, direction }: props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11.085"
      height="30.183"
      viewBox="0 0 11.085 30.183"
      onClick={callback}
      style={direction ? { transform: "rotate(180deg)" } : {}}
    >
      <path
        id="Icon_ionic-ios-arrow-back"
        data-name="Icon ionic-ios-arrow-back"
        d="M14.592,21.281,21.929,9.87a3.053,3.053,0,0,0,0-3.046,1.079,1.079,0,0,0-1.963,0l-8.312,12.93a3.077,3.077,0,0,0-.04,2.974l8.346,13.02a1.08,1.08,0,0,0,1.963,0,3.053,3.053,0,0,0,0-3.046Z"
        transform="translate(-11.251 -6.194)"
        fill="#fff"
      />
    </svg>
  );
}
