import { css } from "../../styled-system/css";
import { Link } from "react-aria-components";
import ToolIcon from "./ToolIcon";

//STYLES

const projectCss = (isReverse = false, type = "web") =>
  css.raw({
    display: "flex",
    flexDirection:
      type === "web" ? (isReverse ? "row-reverse" : "row") : "column",
    alignItems: "center",
    gap: "1rem",

    textAlign: type === "web" ? "left" : "center",

    m: "8rem 0",

    sm: {
      gap: "2rem",
    },

    lg: {
      flexDirection: isReverse ? "row-reverse" : "row",

      textAlign: "left",

      m: "10rem 0",

      p: "2rem",
    },
  });

const projectPictureCss = (isReverse = false) =>
  css.raw({
    display: "flex",
    justifyContent: isReverse ? "left" : "right",
    overflow: "hidden",

    minWidth: "120px",
    maxWidth: "720px",

    lg: {
      aspectRatio: "8/5",

      m: "0",
    },
  });

const projectImgCss = css.raw({
  minWidth: "310px",

  rounded: "1rem",

  lg: {
    aspectRatio: "8/5",

    width: "100%",
    height: "auto",
  },
});

const projectVideoContainerCss = css.raw({
  aspectRatio: "8/5",

  width: "100%",
  maxWidth: "720px",

  p: "1rem",

  lg: { p: "0" },
});

const projectVideoFrameCss = css.raw({
  overflow: "hidden",
  aspectRatio: "inherit",

  minWidth: "120px",
  width: "100%",

  rounded: "1rem",

  position: "relative",
});

const projectVideoCss = css.raw({
  aspectRatio: "inherit",

  backgroundSize: "cover",
  backgroundPosition: "center",
  objectFit: "cover",

  position: "absolute",
  top: "0",
  left: "0",

  lg: { p: "0" },
});

const projectInfoCss = (type = "web") =>
  css.raw({
    display: "flex",
    flexDirection: "column",
    boxSizing: "border-box",
    justifyContent: type === "web" ? "left" : "center",

    maxW: type === "web" ? "450px" : "500px",

    "@media (min-width: 345px)": {
      paddingInline: " 1rem",
    },

    lg: {
      justifyContent: "left",
      maxW: "500px",
      paddingInline: "0",
    },
  });

const projectTitleCss = css.raw({
  fontSize: "1.5rem",
  fontWeight: "bold",

  textWrap: "balance",

  marginBottom: "2rem",

  sm: { fontSize: "1.75rem" },

  md: { fontSize: "2rem" },

  lg: { fontSize: "2.25rem" },
});

const projectTextCss = css.raw({
  color: "gray80",

  textWrap: "pretty",

  m: "1rem 0 2rem 0",

  xl: {
    fontSize: "1rem",
  },
});

const projectLinksCss = css.raw({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",

  fontSize: "0.8rem",

  m: "1rem 0",

  xl: {
    fontSize: "1rem",
  },
});

const tagsCss = css.raw({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "inherit",
  gap: "0.75rem",

  fontSize: "0.8125rem",

  p: "0.5rem 0",

  xl: {
    gap: "1rem",
  },
});

const tagCss = css.raw({
  display: "flex",
  alignItems: "center",
  gap: "0.5rem",

  bgColor: "#222222",

  rounded: "1rem",

  p: "0.25rem 0.75rem",
});

const tagIconCss = css.raw({
  height: "16px",
});

const primaryLinkCss = css.raw({
  color: "black",

  bgColor: "white",

  fontWeight: "medium",

  rounded: "0.5rem",

  p: "0.5rem 0.75rem",

  cursor: "pointer",

  transition: "background-color 0.1s ease-in-out",

  _hover: {
    bgColor: "gray80",
  },
});

const secondaryLinkCss = css.raw({
  textDecoration: "underline",

  cursor: "pointer",

  transition: "color 0.1s ease-in-out",

  _hover: { color: "gray80" },
});

//TYPES

interface ProjectProps {
  title: string;
  type: string;
  tags: string[];
  code?: string;
  page: string;
  imgUrl?: string;
  imgUrlMobile?: string;
  isReverse?: boolean;
  isMobile?: boolean;
  children: React.ReactNode;
}

//COMPONENT

const Project: React.FC<ProjectProps> = ({
  title,
  type,
  tags,
  code,
  page,
  imgUrl,
  imgUrlMobile,
  isReverse,
  children,
}) => {
  return (
    <section className={css(projectCss(isReverse, type))}>
      {type === "web" && (
        <picture className={css(projectPictureCss(isReverse))}>
          <source srcSet={imgUrlMobile} media="(max-width: 1023px)" />
          <img src={imgUrl} alt="" className={css(projectImgCss)} />
        </picture>
      )}

      {type === "multimedia" && (
        <div className={css(projectVideoContainerCss)}>
          <div className={css(projectVideoFrameCss)}>
            <video
              className={css(projectVideoCss)}
              src={imgUrl}
              autoPlay
              muted
              playsInline
              loop
            ></video>
          </div>
        </div>
      )}

      <div className={css(projectInfoCss(type))}>
        <h1 className={css(projectTitleCss)}>{title}</h1>

        <div className={css(tagsCss)}>
          {tags.map((tag, index) => (
            <span className={css(tagCss)} key={index}>
              <ToolIcon className={css(tagIconCss)} name={tag} />
              {tag}
            </span>
          ))}
        </div>

        <p className={css(projectTextCss)}>{children}</p>

        {type === "web" && (
          <div className={css(projectLinksCss)}>
            <Link className={css(secondaryLinkCss)} href={code} target="_blank">
              Ver Código
            </Link>

            <Link className={css(primaryLinkCss)} href={page} target="_blank">
              Ver página
            </Link>
          </div>
        )}

        {type === "multimedia" && (
          <div className={css(projectLinksCss)}>
            <Link className={css(primaryLinkCss)} href={page} target="_blank">
              Jugar
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Project;
