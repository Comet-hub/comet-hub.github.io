import { css } from "../../styled-system/css";
import Contact from "./Contact";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useScroll } from "../hooks/useScroll";
import { Link } from "react-aria-components";

//STYLES

const headerCss = (state: boolean) =>
  css.raw({
    display: "flex",
    boxSizing: "border-box",

    bg: "black",

    w: "100%",

    position: "sticky",
    top: "0",
    zIndex: "100",

    borderBottom: state
      ? "1px solid rgba(255, 255, 255, 0.3)"
      : "1px solid rgba(255, 255, 255, 0)",

    transition: "border-bottom .2s ease-in-out",

    "@supports (backdrop-filter: none)": {
      bgColor: "rgba(0, 0, 0, 0.3)",

      backdropFilter: "auto",
      backdropBlur: "lg",
    },
  });

const containerCss = css.raw({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxSizing: "border-box",

  w: "100%",
  maxW: "1536px",
  h: "100%",

  m: "auto",

  p: ".25em",
});

//TYPES

interface HeaderProps {
  navOptions: string[];
}

//COMPONENT

const Header: React.FC<HeaderProps> = ({ navOptions }) => {
  const isScrolling = useScroll();

  return (
    <header className={css(headerCss(isScrolling))}>
      <div className={css(containerCss)}>
        <Link href="#">
          <Logo path="/c.svg" logotype="Camilo C." />
        </Link>

        <Navigation options={navOptions}></Navigation>

        <Contact />
      </div>
    </header>
  );
};

export default Header;
