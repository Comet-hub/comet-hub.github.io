import { css } from "../../styled-system/css";
import ToolIcon from "./ToolIcon";
import {
  Link,
  OverlayArrow,
  Tooltip,
  TooltipTrigger,
} from "react-aria-components";

// STYLES

const iconContainerCss = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  height: "64px",
  width: "64px",

  borderWidth: "1px",
  borderColor: "gray30",
  rounded: "full",

  cursor: "pointer",

  transition: "transform .2s ease-in-out ",

  _hover: {
    transform: "scale(1.2)",
  },
});

const toolIconCss = css.raw({
  height: "32px",
});

const tooltipCss = css.raw({
  color: "black",

  bg: "white",

  fontSize: ".875rem",

  rounded: "1rem",

  p: ".5rem 1rem",
});

//TYPES

interface ToolItemProps {
  name: string;
  label: string;
  href?: string;
}

const ToolItem: React.FC<ToolItemProps> = ({ name, label, href = "" }) => {
  return (
    <TooltipTrigger delay={0}>
      <Link className={css(iconContainerCss)} href={href} target="_blank">
        <ToolIcon className={css(toolIconCss)} name={name} />
      </Link>

      <Tooltip className={css(tooltipCss)}>
        <OverlayArrow>
          <svg width={8} height={8} viewBox="0 0 8 8">
            <path d="M0 0 L4 4 L8 0" fill="white" />
          </svg>
        </OverlayArrow>
        {label}
      </Tooltip>
    </TooltipTrigger>
  );
};
export default ToolItem;
