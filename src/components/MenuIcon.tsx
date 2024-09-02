import { css } from "../../styled-system/css";

//STYLES

const rectCss = css.raw({
  w: "18px",
  h: "2px",

  fill: "white",

  transformOrigin: "50% 50%",
  transformBox: "fill-box",

  transition: "opacity 0.2s ease-in-out, transform 0.2s ease-in-out",
});

//TYPES

interface MenuIconProps {
  state: boolean;
}

const MenuIcon: React.FC<MenuIconProps> = ({ state }: { state: boolean }) => {
  return (
    <svg width="24" height="24">
      <rect
        className={css(rectCss, {
          opacity: state ? "0" : "1",
        })}
        x="3"
        y="6"
      />

      <rect
        className={css(rectCss, {
          transform: state ? "rotate(45deg)" : "rotate(0)",
        })}
        x="3"
        y="11"
      />

      <rect
        className={css(rectCss, {
          transform: state ? "rotate(-45deg)" : "rotate(0)",
        })}
        x="3"
        y="11"
      />

      <rect
        className={css(rectCss, {
          opacity: state ? "0" : "1",
        })}
        x="3"
        y="16"
      />
    </svg>
  );
};

export default MenuIcon;
