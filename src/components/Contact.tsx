import { css } from "../../styled-system/css";
import { useClipboard } from "../hooks/useClipboard";
import {
  Button,
  Dialog,
  DialogTrigger,
  Heading,
  Modal,
  ModalOverlay,
  Link,
} from "react-aria-components";

//STYLES
const triggerBtnCss = css.raw({
  display: "none",
  lg: {
    display: "block",

    color: "black",

    bg: "white",

    fontWeight: "medium",

    border: "none",
    rounded: "0.5rem",

    padding: "0.5rem  1.2rem",

    cursor: "pointer",

    transition: "all 0.1s ease-in-out",

    _hover: {
      bg: "gray80",
    },
  },
});

const cardOverlayCss = (isEntering: boolean, isExiting: boolean) =>
  css.raw(
    {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflowY: "auto",

      textAlign: "center",

      backdropFilter: "auto",
      backdropBlur: "8px",

      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "200",

      p: "1rem",

      "@supports not (backdrop-filter: none)": {
        bgColor: "rgba(0, 0, 0, 0.7)",
      },
    },
    isEntering ? { animation: "fadein .3s ease-in-out" } : {},
    isExiting ? { animation: "fadeout .3s ease-in-out" } : {}
  );

const cardCss = css.raw({
  verticalAlign: "middle",

  backgroundColor: "black",

  textAlign: "left",

  w: "700px",
  h: "400px",

  rounded: "1rem",

  boxShadow:
    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",

  transformStyle: "preserve-3d",

  animation: "flip 1s ease-in-out forwards",
});

const flipCss = css.raw({
  transform: "rotateY(180deg)",
});

const cardFaceCss = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  bgGradient: "complete",

  w: "100%",
  h: "100%",

  outline: "none",
  rounded: "1rem",

  position: "absolute",

  backfaceVisibility: "hidden",
});

const cardContentCss = css.raw({
  display: "flex",
  justifyContent: "center",

  bgColor: "black",

  w: "100%",
  h: "85%",

  p: "2rem",
});

const cardLogoCss = css.raw({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  w: "40%",
});

const cardHeadingCss = css.raw({
  fontSize: "2rem",
  fontWeight: "bold",
});

const cardPCss = css.raw({
  color: "gray80",

  fontSize: "0.9rem",
});

const cardInfoCss = css.raw({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",

  w: "60%",

  borderLeft: "2px solid white",

  p: "0 2rem",
});

const cardBtnGroupCss = css.raw({
  display: "flex",
  flexDirection: "column",
  gap: "0.3rem",

  marginTop: ".5rem",
});

const cardBtnCss = css.raw({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  rounded: "0.5rem",

  p: "0.5rem 1rem",

  cursor: "pointer",

  _hover: {
    bg: "gray10",
  },
});

const cardBtnContentCss = css.raw({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.5rem",
});

const cardBtnInfoCss = css.raw({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "start",

  lineHeight: "1.2",
});

const cardBtnH2Css = css.raw({
  fontSize: "1rem",
  fontWeight: "bold",
});

const cardBtnPCss = css.raw({
  color: "gray80",

  fontSize: "0.8rem",
});

const cardBtnVarIconCss = css.raw({
  position: "relative",
});

const cardBtnCopyIconCss = (state: string) =>
  css.raw({
    opacity: state !== "pending" ? "0" : "100%",

    transition: "opacity .1s ease-in-out",
  });

const cardBtnStatusIconCss = css.raw({
  position: "absolute",
  top: "0",
  left: "0",
});

const cardBtnErrorIconCss = (state: string) =>
  css.raw({
    filter:
      "invert(57%) sepia(100%) saturate(6359%) hue-rotate(359deg) brightness(100%) contrast(110%)",

    opacity: state === "error" ? "100%" : "0",

    transition: "opacity .1s ease-in-out",
  });

const cardBtnSuccessIconCss = (state: string) =>
  css.raw({
    filter:
      "invert(43%) sepia(79%) saturate(1281%) hue-rotate(170deg) brightness(106%) contrast(103%)",

    opacity: state === "success" ? "100%" : "0",

    transition: "opacity .1s ease-in-out",
  });

const closeBtnCss = css.raw({
  rounded: "0.5rem",

  position: "absolute",
  right: "10px",
  top: "40px",

  p: "0.3rem",

  cursor: "pointer",

  _hover: {
    bg: "gray10",
  },
});

//TYPES

//COMPONENT

const Contact = () => {
  const { clipboardState, copy } = useClipboard();

  return (
    <DialogTrigger>
      <Button className={css(triggerBtnCss)}>Contacto</Button>

      <ModalOverlay
        className={({ isEntering, isExiting }) =>
          css(cardOverlayCss(isEntering, isExiting))
        }
      >
        <Modal className={css(cardCss)}>
          <Dialog className={css(cardFaceCss)}>
            <div className={css(cardContentCss)}>
              <img src="/c.svg" alt="Camilo C." height={128} width={128} />
            </div>
          </Dialog>

          <Dialog className={css(cardFaceCss, flipCss)}>
            {({ close }): JSX.Element => (
              <div className={css(cardContentCss)}>
                <div className={css(cardLogoCss)}>
                  <img src="/c.svg" alt="Camilo C." height={96} width={96} />
                </div>

                <div className={css(cardInfoCss)}>
                  <Heading slot="title" className={css(cardHeadingCss)}>
                    Camilo C.
                  </Heading>

                  <p className={css(cardPCss)}>
                    Ingeniero Multimedia, Desarrollador Front‑end y Diseñador
                    Web
                  </p>

                  <div className={css(cardBtnGroupCss)}>
                    <Link
                      className={css(cardBtnCss)}
                      href="https://github.com/Comet-hub"
                      target="_blank"
                    >
                      <div className={css(cardBtnContentCss)}>
                        <img
                          src="/github.svg"
                          alt="GitHub"
                          height={40}
                          width={40}
                        />

                        <div className={css(cardBtnInfoCss)}>
                          <h2 className={css(cardBtnH2Css)}>GitHub</h2>

                          <p className={css(cardBtnPCss)}>Comet-hub</p>
                        </div>
                      </div>

                      <img
                        src="/open-in-new.svg"
                        alt="open in new"
                        height={28}
                        width={28}
                      />
                    </Link>

                    <Link
                      className={css(cardBtnCss)}
                      href="https://www.linkedin.com/in/camilo-castellanos-icc/"
                      target="_blank"
                    >
                      <div className={css(cardBtnContentCss)}>
                        <img
                          src="/linkedin.svg"
                          alt="LinkedIn"
                          height={40}
                          width={40}
                        />

                        <div className={css(cardBtnInfoCss)}>
                          <h2 className={css(cardBtnH2Css)}>LinkedIn</h2>

                          <p className={css(cardBtnPCss)}>
                            camilo-castellanos-icc
                          </p>
                        </div>
                      </div>

                      <img src="/open-in-new.svg" width={28} />
                    </Link>

                    <Button
                      className={css(cardBtnCss)}
                      onPress={() => copy("icamilocc@gmail.com")}
                    >
                      <div className={css(cardBtnContentCss)}>
                        <img
                          src="/mail.svg"
                          alt="mail"
                          height={40}
                          width={40}
                        />

                        <div className={css(cardBtnInfoCss)}>
                          <h2 className={css(cardBtnH2Css)}>Correo</h2>

                          <p className={css(cardBtnPCss)}>
                            icamilocc@gmail.com
                          </p>
                        </div>
                      </div>

                      <div className={css(cardBtnVarIconCss)}>
                        <img
                          className={css(cardBtnCopyIconCss(clipboardState))}
                          src="/copy.svg"
                          alt="copy"
                          height={28}
                          width={28}
                        />

                        <img
                          className={css(
                            cardBtnStatusIconCss,
                            cardBtnSuccessIconCss(clipboardState)
                          )}
                          src="/check.svg"
                          alt="check"
                          height={28}
                          width={28}
                        />

                        <img
                          className={css(
                            cardBtnStatusIconCss,
                            cardBtnErrorIconCss(clipboardState)
                          )}
                          src="/close.svg"
                          alt="close"
                          height={28}
                          width={28}
                        />
                      </div>
                    </Button>
                  </div>
                </div>

                <Button onPress={close} className={css(closeBtnCss)}>
                  <img src="/close.svg" alt="close" height={32} width={32} />
                </Button>
              </div>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default Contact;
