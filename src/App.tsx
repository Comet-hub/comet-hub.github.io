import { css } from "../styled-system/css";
import Header from "./components/Header";
import ScrollIcon from "./components/ScrollIcon";
import { Link } from "react-aria-components";
import Project from "./components/Project";
import ToolItem from "./components/ToolItem";

const navOptions = ["Web", "Multimedia", "Herramientas"];

//STYLES

const mainCss = css.raw({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  textAlign: "center",

  maxW: "1280px",
  minH: "calc(100vh - 4.5rem)",

  m: "auto",
});

const mainTitleCss = css.raw({
  color: "gray80",

  fontSize: "1rem",

  textWrap: "balance",

  m: "1em 0",

  "@media (min-width: 375px)": {
    p: "1rem",
  },

  sm: {
    fontSize: "1.25rem",

    paddingInline: "1rem",
  },

  md: {
    fontSize: "1.5rem",
  },

  lg: {
    fontSize: "1.75rem",
  },

  xl: {
    fontSize: "2rem",
  },
});

const mainTitleStrongCss = css.raw({
  color: "white",

  fontSize: "1.925rem",

  sm: {
    fontSize: "2.525rem",
  },

  md: {
    fontSize: "3.125rem",
  },

  lg: {
    fontSize: "3.725rem",
  },

  xl: {
    fontSize: "4.325rem",
  },
});

const mainTitleEmphasisCss = css.raw({
  color: "white",

  "@supports (background-clip: text)": {
    color: "transparent",

    bgClip: "text",
  },
});

const gradient1Css = css.raw({
  "@supports (background-clip: text)": {
    bgGradient: "yellow-orange",
  },
});

const gradient2Css = css.raw({
  "@supports (background-clip: text)": {
    bgGradient: "orange-violet",
  },
});

const gradient3Css = css.raw({
  "@supports (background-clip: text)": {
    bgGradient: "violet-blue",
  },
});

const presentationCss = css.raw({
  color: "gray80",

  fontSize: "1rem",

  textWrap: "pretty",

  m: "1em 0",

  "@media (min-width: 375px)": {
    p: "1rem",
  },

  sm: { fontSize: "1.125rem" },

  md: { fontSize: "1.25rem" },

  lg: { fontSize: "1.375rem" },

  xl: { fontSize: "1.3rem" },
});

const callToActionCss = css.raw({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  m: "1em 0",
});

const articleCss = css.raw({
  maxWidth: "873px",

  m: "auto",

  paddingTop: "64px",

  lg: {
    maxWidth: "1280px",
  },
});

const articleTitleCss = css.raw({
  fontSize: "2rem",
  fontWeight: "bold",

  textAlign: "center",

  m: "0.5em 0",

  lg: {
    fontSize: "3.75rem",
  },
});

const articleTextCss = css.raw({
  color: "gray80",

  fontSize: "1rem",

  textAlign: "center",
  textWrap: "pretty",

  maxW: "1024px",

  m: "auto",

  "@media (min-width: 345px)": {
    p: "1rem",
  },

  lg: {
    fontSize: "1.25rem",
  },
});

const toolsGridCss = css.raw({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "2rem",

  maxWidth: "1024px",

  margin: "4rem auto",

  p: "2rem",

  lg: {
    gap: "3rem",

    margin: "6rem auto",

    p: "4rem",
  },
});

const hrArticleCss = css.raw({
  w: "95%",

  m: "3rem auto 0",

  borderColor: "gray40",

  lg: {
    m: "6rem auto 0",
  },
});

const footerCss = css.raw({});

const footerContainerCss = css.raw({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "2rem",

  margin: "1rem",
});

const hrFooterCss = css.raw({
  borderColor: "gray40",
});

const footerIconCss = css.raw({
  height: "32px",
});

const App = () => {
  return (
    <>
      <Header navOptions={navOptions} />
      <main className="main">
        <header className={css(mainCss)}>
          <h1 className={css(mainTitleCss)}>
            Hola, soy Camilo. <br />
            <strong className={css(mainTitleStrongCss)}>
              Ingeniero{" "}
              <span className={css(mainTitleEmphasisCss, gradient1Css)}>
                Multimedia
              </span>
              , Desarrollador{" "}
              <span className={css(mainTitleEmphasisCss, gradient2Css)}>
                Front‑end
              </span>{" "}
              y Diseñador{" "}
              <span className={css(mainTitleEmphasisCss, gradient3Css)}>
                Web
              </span>
              .
            </strong>
          </h1>

          <p className={css(presentationCss)}>
            Bienvenido a mi página, donde comparto mis proyectos personales de
            diseño web y multimedia. Aquí podrás explorar una variedad de
            creaciones que reflejan mi pasión por la creatividad digital, mis
            habilidades y mi crecimiento profesional.
          </p>

          <div className={css(callToActionCss)}>
            <ScrollIcon label="¿Quieres conocer más?" />
          </div>
        </header>

        <article id="web" className={css(articleCss)}>
          <header>
            <h1 className={css(articleTitleCss)}>Proyectos Web.</h1>

            <p className={css(articleTextCss)}>
              Explora mi colección de proyectos web. Aquí encontrarás proyectos
              de Front End que he realizado en la plataforma FrontMentor.
            </p>
          </header>

          <Project
            title="Interactive Card Details Form"
            type="web"
            tags={["HTML", "CSS", "JavaScript", "React"]}
            code="https://github.com/Comet-hub/interactive-card-details-form"
            page="https://comet-hub.github.io/interactive-card-details-form/"
            imgUrl="/interactive-card-details-form-desktop.webp"
            imgUrlMobile="/interactive-card-details-form-mobile.webp"
            isReverse
          >
            Este proyecto fue desarrollado con HTML, CSS, JavaScript y React.
            Consistió en la creación de un formulario interactivo donde se
            ingresan los datos de una tarjeta y los usuarios pueden ver en
            tiempo real los datos de la ésta. El formulario valida si la
            información es correcta.
          </Project>

          <Project
            title="Base Apparel Coming Soon Page"
            type="web"
            tags={["HTML", "CSS", "JavaScript"]}
            code="https://github.com/Comet-hub/coming_soon_page"
            page="https://comet-hub.github.io/coming_soon_page/"
            imgUrl="/coming-soon-page-desktop.webp"
            imgUrlMobile="/coming-soon-page-mobile.webp"
          >
            Este proyecto fue desarrollado con HTML, CSS y JavaScript. Consistió
            en la creación de una página web que anuncia la apertura de una
            tienda y solicita el correo del usuario para enviarle información.
            El formulario valida si el correo es válido.
          </Project>

          <Project
            title="Interactive Rating Component"
            type="web"
            tags={["HTML", "CSS", "JavaScript"]}
            code="https://github.com/Comet-hub/interactive_rating_component"
            page="https://comet-hub.github.io/interactive_rating_component/"
            imgUrl="/interactive-rating-component-desktop.webp"
            imgUrlMobile="/interactive-rating-component-mobile.webp"
            isReverse
          >
            Este proyecto fue desarrollado con HTML, CSS y JavaScript. Consistió
            en la creación de un componente interactivo que permite a los
            usuarios puntuar su experiencia de uno a cinco.
          </Project>
        </article>

        <article id="multimedia" className={css(articleCss)}>
          <header>
            <h1 className={css(articleTitleCss)}>Proyectos Multimedia.</h1>

            <p className={css(articleTextCss)}>
              Echa un vistazo a mis proyectos multimedia. Aquí encontrarás
              proyectos que combinan mis habilidades en modelado 3D, texturizado
              y desarrollo de experiencias interactivas.
            </p>
          </header>

          <Project
            title="Labyrinth"
            type="multimedia"
            tags={["Unity", "Substance", "Maya"]}
            page="https://comet-hub.github.io/Labyrinth/"
            imgUrl="/labyrinth.webm"
          >
            Este proyecto fue desarrollado utilizando Unity como motor de juego,
            Maya para el modelado 3D y Substance Painter para el texturizado.
            Consiste en un juego donde el objetivo es llevar una bola metálica a
            la meta a través de un laberinto.
          </Project>

          <Project
            title="Spaceship"
            type="multimedia"
            tags={["Unity", "Photoshop", "Maya", "Substance"]}
            page="https://comet-hub.github.io/Spaceship/"
            imgUrl="/spaceship.webm"
            isReverse
          >
            Este proyecto fue desarrollado utilizando Unity como motor de juego,
            Maya para el modelado 3D, Substance Painter para el texturizado y
            photoshop para otros recursos gráficos. Consiste en un juego donde
            el objetivo es acumular la mayor cantidad de puntos esquivando los
            asteroides.
          </Project>

          <Project
            title="Bosque"
            type="multimedia"
            tags={["Unity"]}
            page="https://www.spatial.io/s/Bosque-6476a87f2cc0df235e0a3cf2?share=9014546953071007510"
            imgUrl="/bosque.webm"
          >
            Este proyecto fue el resultado de una prueba técnica realizada para
            un proceso de selección para la cual se dio un dia y medio para su
            elaboración. El objetivo de este proyecto era crear una experiencia
            virtual el la plataforma de Spatial.io. Para su realización se
            utilizó Unity como motor de juego y assets gratuitos de la
            plataforma.
          </Project>
        </article>

        <hr className={css(hrArticleCss)} />

        <article id="herramientas" className={css(articleCss)}>
          <header>
            <p className={css(articleTextCss)}>
              Estos son los lenguajes, software y herramientas que uso.
            </p>
          </header>

          <section>
            <div className={css(toolsGridCss)}>
              <ToolItem
                name="HTML"
                label="HTML"
                href="https://developer.mozilla.org/es/docs/Web/HTML"
              ></ToolItem>

              <ToolItem
                name="CSS"
                label="CSS"
                href="https://developer.mozilla.org/es/docs/Web/CSS"
              ></ToolItem>

              <ToolItem
                name="JavaScript"
                label="JavaScript"
                href="https://developer.mozilla.org/es/docs/Web/JavaScript"
              ></ToolItem>

              <ToolItem
                name="React"
                label="React"
                href="https://es.react.dev/"
              ></ToolItem>

              <ToolItem
                name="Git"
                label="Git"
                href="https://git-scm.com/"
              ></ToolItem>

              <ToolItem
                name="Wordpress"
                label="Wordpress"
                href="https://wordpress.com/es/"
              ></ToolItem>

              <ToolItem
                name="Figma"
                label="Figma"
                href="https://www.figma.com/"
              ></ToolItem>

              <ToolItem
                name="Photoshop"
                label="Photoshop"
                href="https://www.adobe.com/co/products/photoshop.html"
              ></ToolItem>

              <ToolItem
                name="Illustrator"
                label="Illustrator"
                href="https://www.adobe.com/co/products/illustrator.html"
              ></ToolItem>

              <ToolItem
                name="Substance"
                label="Substance"
                href="https://www.adobe.com/es/products/substance3d-painter.html"
              ></ToolItem>

              <ToolItem
                name="Maya"
                label="Maya"
                href="https://www.autodesk.com/latam/products/maya/overview?term=1-YEAR&tab=subscription"
              ></ToolItem>

              <ToolItem
                name="Blender"
                label="Blender"
                href="https://www.blender.org/"
              ></ToolItem>

              <ToolItem
                name="Unity"
                label="Unity"
                href="https://unity.com/es"
              ></ToolItem>
            </div>
          </section>
        </article>
      </main>

      <footer className={css(footerCss)}>
        <hr className={css(hrFooterCss)} />
        <div className={css(footerContainerCss)}>
          <Link
            href="https://www.linkedin.com/in/camilo-castellanos-icc/"
            target="_blank"
          >
            <img
              className={css(footerIconCss)}
              src="/linkedin.svg"
              alt="Linkedin"
            />
          </Link>

          <Link href="https://github.com/Comet-hub" target="_blank">
            <img
              className={css(footerIconCss)}
              src="/github.svg"
              alt="Github"
            />
          </Link>
        </div>
      </footer>
    </>
  );
};

export default App;
