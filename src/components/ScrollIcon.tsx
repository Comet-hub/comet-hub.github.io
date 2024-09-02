import { css } from "../../styled-system/css";
import { useScroll } from "../hooks/useScroll";
//STYLES

const containerCss = (state: boolean) =>
  css.raw({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    opacity: state ? "0" : "1",

    transition: "opacity .7s ease-in-out",
  });

const wheelCss = css.raw({
  strokeWidth: "0",

  lg: {
    strokeDasharray: "20px",
    strokeDashoffset: "20px",
    strokeWidth: "6",

    animation: "wheel 2s ease-in-out infinite",
  },
});

const mouseCss = css.raw({
  strokeWidth: "0",

  lg: {
    strokeWidth: "6",
  },
});

const fingerCss = css.raw({
  stroke: "gray80",
  strokeDasharray: "50px",
  strokeDashoffset: "50px",
  strokeWidth: "44",

  animation: "finger 2s ease-in-out infinite",

  lg: {
    strokeWidth: "0",
  },
});

interface ScrollIconProps {
  label: string;
}

//COMPONENT

const ScrollIcon: React.FC<ScrollIconProps> = ({ label }) => {
  const isScrolling = useScroll();

  return (
    <div className={css(containerCss(isScrolling))}>
      <small className={css({ m: "1rem" })}>{label}</small>

      <svg
        width="54"
        height="100"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line className={css(wheelCss)} x1="25" y1="20" x2="25" y2="35" />

        <path
          className={css(mouseCss)}
          d="M 25 4 C 14 4 4 14 4 25 V 65 C 4 76 14 86 25 86 C 36 86 46 76 46 65 V 25 C 46 14 36 4 25 4 Z"
        />

        <line className={css(fingerCss)} x1="25" y1="75" x2="25" y2="25" />
      </svg>
    </div>
  );
};

export default ScrollIcon;
