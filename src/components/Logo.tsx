import { css } from "../../styled-system/css";

//STYLES

const logoContainerCss = css.raw({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  fontSize: "1rem",

  p: "1rem",
});

const logoImgCss = css.raw({
  w: "24px",
  h: "24px",
});

interface LogoProps {
  path: string;
  logotype?: string;
}

//COMPONENT

const Logo: React.FC<LogoProps> = ({ path, logotype }) => {
  return (
    <div className={css(logoContainerCss)}>
      <img className={css(logoImgCss)} src={path} alt="logo" />

      <strong>{logotype}</strong>
    </div>
  );
};

export default Logo;
