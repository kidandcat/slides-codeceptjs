// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, Image } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const indexCreator = data => ({ active }) => (
  <div>
    {data.map((d, i) => (
      <p key={i} style={{ color: active === i ? "#03A9FC" : "black" }}>
        {d}
      </p>
    ))}
  </div>
);

const Index = indexCreator([
  "¿Qué es un Framework?",
  "¿Qué ventajas tiene utilizar un Framework?",
  "¿Y si no necesito o no quiero utilizar un Framework?",
  "Frontend Frameworks 2018",
  "React y similares (tipo UI library)",
  "Angular y similares (tipo full framework)",
  "Comparaciones en relación al mercado laboral"
]);

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

let animationDelay;
const imgStyle = (delay, first) => {
  animationDelay = first ? delay : parseInt(delay) + parseInt(animationDelay);
  return {
    animationDelay: `${animationDelay}ms`,
    animationDuration: `${delay * 30}ms`,
    maxHeight: "100px",
    flex: 1,
    margin: "5px",
    transition: "all .3s linear"
  };
};

export default class Presentation extends React.Component {
  constructor() {
    super();
    this.reversed = false;
    this.state = {
      logos: [
        "/dist/angular.png",
        "/dist/aurelia.png",
        "/dist/ember.png",
        "/dist/hyperapp.png",
        "/dist/inferno.png",
        "/dist/polymer.png",
        "/dist/react.png",
        "/dist/preact.png",
        "/dist/riot.png",
        "/dist/vue.png"
      ]
    };
  }
  reverse() {
    setTimeout(() => {
      this.reversed = true;
      this.forceUpdate();
    }, 3000);
  }
  render() {
    !this.reversed && this.reverse();
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1}>Frontend frameworks</Heading>
        </Slide>
        <Slide>
          <Index active={0} />
        </Slide>
        <Slide>
          <Text>
            Siendo muy simples, es un patrón para el desarrollo de una
            aplicación
          </Text>
        </Slide>
        <Slide>
          <Index active={1} />
        </Slide>
        <Slide>
          <Text>Arquitectura</Text>
          <p>
            El programador no necesita plantearse una estructura global de la
            aplicación, sino que el framework le proporciona un esqueleto
          </p>
        </Slide>
        <Slide>
          <Text>Facilita la colaboración</Text>
          <p>
            Un framework te provee de una estructura y una "forma de hacer las
            cosas" estandarizada, por lo tanto, cualquiera que conozca cómo
            funciona ese framework será capaz de entender la mayor parte de la
            aplicación la primera vez que la vea
          </p>
        </Slide>
        <Slide>
          <Text>Más recursos</Text>
          <p>
            Es más fácil encontrar tanto recursos (cursos, librerías,
            bibliotecas) como desarrolladores que tengan los conocimientos para
            entrar a la empresa y empezar a trabajar desde el primer dia
          </p>
        </Slide>
        <Slide>
          <Index active={2} />
        </Slide>
        <Slide>
          <p>
            Por supuesto, se puede crear toda una aplicación sin seguir ningún
            framework conocido
          </p>
          <p>Puede que sea tan pequeña que no se considere necesario</p>
          <p>
            O simplemente no desee dedicar tiempo a seleccionar y aprender uno
          </p>
        </Slide>
        <Slide>
          <p>
            Sin embargo, a medida que la aplicación crece, un programador
            competente procurará seguir unas determinadas pautas que le
            faciliten su trabajo de desarrollo y mantenimiento:
          </p>
        </Slide>
        <Slide>
          <p>Separación de presentación y lógica</p>
          <p>Una sintaxis coherente</p>
          <p>Generación de código repetitivo</p>
          <p>Herramientas para agilizar el desarrollo</p>
        </Slide>
        <Slide>
          <p>
            La evolución natural será hacia que, de algún modo, se construirá su
            propio framework
          </p>
        </Slide>
        <Slide>
          <p>
            Hacer un desarrollo críptico y difícil de interpretar puede ser útil
            en un concurso de código ofuscado o para presumir de “gurú”, pero{" "}
            <strong>
              es muy poco útil para desarrollar y mantener una aplicación.
            </strong>
          </p>
        </Slide>
        <Slide>
          <p>
            El coste inicial (la curva de aprendizaje) de utilizar un framework
            se compensará probablemente en cuanto el trabajo de desarrollo
            crezca mínimamente
          </p>
        </Slide>
        <Slide>
          <Index active={3} />
        </Slide>
        <Slide>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            {this.state.logos.map((l, i) => (
              <Image
                key={l}
                className="logos"
                style={imgStyle(100, i === 0)}
                src={l}
              />
            ))}
          </div>
        </Slide>
        <Slide>
          <Index active={4} />
        </Slide>
        <Slide>
          <p>React y similares (tipo UI library)</p>
        </Slide>
        <Slide>
          <Index active={5} />
        </Slide>
        <Slide>
          <p>Angular y similares (tipo full framework)</p>
        </Slide>
        <Slide>
          <Index active={6} />
        </Slide>
        <Slide>
          <p>Comparaciones en relación al mercado laboral</p>
        </Slide>
        <Slide>
          <p>Gracias</p>
        </Slide>
      </Deck>
    );
  }
}
