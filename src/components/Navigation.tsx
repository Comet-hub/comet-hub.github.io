import { css } from "../../styled-system/css";
import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
  Section,
  Header,
  Separator,
  Text,
  Keyboard,
} from "react-aria-components";
import MenuIcon from "./MenuIcon";
import { useState } from "react";
import { useClipboard } from "../hooks/useClipboard";

//STYLES

const navCss = css.raw({
  display: "none",
  boxSizing: "border-box",

  fontWeight: "medium",

  lg: { display: "flex", alignItems: "center" },
});

const navUlCss = css.raw({
  display: "flex",
  gap: "2rem",
  boxSizing: "border-box",
});

const aCss = css.raw({
  transition: "color 0.1s ease-in-out ",

  _hover: { color: "gray80" },
});

const buttonCss = css.raw({
  boxSizing: "border-box",

  rounded: "6px",

  p: "1rem",

  cursor: "pointer",

  // _focus: {
  //   outline: "none",
  //   boxShadow: "inset 0px 0px 0px 1px white",
  // },

  lg: {
    display: "none",
  },
});

const menuCss = css.raw({
  boxSizing: "border-box",
  overflow: "auto",

  bgColor: "black",

  minW: "150px",
  maxH: "inherit",

  marginTop: "15px",

  border: "1px solid rgba(255, 255, 255, 0.3)",
  outline: "none",
  rounded: "12px",

  p: "1rem",

  "@supports (backdrop-filter: none)": {
    bgColor: "rgba(0, 0, 0, 0.3)",

    backdropFilter: "auto",
    backdropBlur: "lg",
  },
});

const menuItemCss = css.raw({
  display: "grid",
  gridTemplateAreas: '"label kbd" "desc kbd"',
  alignItems: "center",
  columnGap: "20px",

  color: "white",

  fontSize: "1.072rem",

  m: "2px",

  outline: "none",
  rounded: "6px",

  cursor: "default",
  position: "relative",

  p: "0.286rem 0.571rem",

  forcedColorAdjust: "none",

  _focus: {
    background: "gray10",
    color: "white",
  },

  "& span": {
    fontWeight: "medium",
    gridArea: "label",
  },

  "& small": {
    fontSize: "small",
    gridArea: "desc",
    color: "#cccccc",
  },

  "& kbd": {
    gridArea: "kbd",
    fontFamily: "monospace",
    textAlign: "end",
    alignSelf: "center",
    justifySelf: "end",
  },
});

const separatorCss = css.raw({
  bgColor: "rgba(255, 255, 255, 0.3)",

  h: "1px",

  m: "1rem  2px",
});

const menuHeaderCss = css.raw({
  fontWeight: "bold",
});

interface NavProps {
  options: string[];
}

const Navigation: React.FC<NavProps> = ({ options }) => {
  const [open, setOpen] = useState(false);
  const { copy } = useClipboard();

  return (
    <>
      <nav className={css(navCss)}>
        <ul className={css(navUlCss)}>
          {options.map((option) => (
            <li key={option}>
              <a className={css(aCss)} href={`#${option.toLocaleLowerCase()}`}>
                {option}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <MenuTrigger isOpen={open} onOpenChange={setOpen}>
        <Button aria-label="Menu" className={css(buttonCss)}>
          <MenuIcon state={open} />
        </Button>

        <Popover>
          <Menu className={css(menuCss)}>
            <Section>
              <Header className={css(menuHeaderCss)}>ESTE SITIO</Header>
              {options.map((option) => (
                <MenuItem
                  key={option}
                  className={css(menuItemCss)}
                  href={`#${option.toLocaleLowerCase()}`}
                >
                  <Text slot="label">{option}</Text>
                </MenuItem>
              ))}
            </Section>

            <Separator className={css(separatorCss)} />

            <Section>
              <Header className={css(menuHeaderCss)}>CONTACTO</Header>

              <MenuItem
                className={css(menuItemCss)}
                href="https://github.com/Comet-hub"
                target="_blank"
              >
                <Text slot="label">GitHub</Text>

                <small>Comet-hub</small>

                <Keyboard>
                  <img
                    src="/open-in-new.svg"
                    alt="GitHub"
                    height={24}
                    width={24}
                  />
                </Keyboard>
              </MenuItem>

              <MenuItem
                className={css(menuItemCss)}
                href="https://www.linkedin.com/in/camilo-castellanos-icc/"
                target="_blank"
              >
                <Text slot="label">LinkedIn</Text>

                <small>camilo-castellanos-icc</small>

                <Keyboard>
                  <img
                    src="/open-in-new.svg"
                    alt="LinkedIn"
                    height={24}
                    width={24}
                  />
                </Keyboard>
              </MenuItem>

              <MenuItem
                className={css(menuItemCss)}
                onAction={() => copy("icamilocc@gmail.com")}
              >
                <Text slot="label">Correo</Text>

                <small>icamilocc@gmail.com</small>

                <Keyboard>
                  <img src="/copy.svg" alt="copy" height={24} width={24} />
                </Keyboard>
              </MenuItem>
            </Section>
          </Menu>
        </Popover>
      </MenuTrigger>
    </>
  );
};

export default Navigation;
