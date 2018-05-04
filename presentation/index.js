// Import React
import React from "react";

// Import Spectacle Core tags
import { Deck, Heading, Slide, Text, CodePane } from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom"]} transitionDuration={500} theme={theme}>
        <Slide>
          <Heading size={1}>React</Heading>
          <Text>A JavaScript library for building user interfaces</Text>
        </Slide>
        <Slide>
          <Heading size={4}>Declarative</Heading>
          <Text>
            Design simple views for each state in your application, and React
            will efficiently update and render just the right components when
            your data changes.
          </Text>
        </Slide>
        <Slide>
          <CodePane
            source={`export const Loading = () => (state, actions) => (
<div style={{ opacity: state.loading ? 1 : 0 }}>
  <div className="spinner-container">
    <div className="spinner">
      <div />
    </div>
    <div className="spinner-text">Loading</div>
  </div>
</div>
);`}
          />
        </Slide>
      </Deck>
    );
  }
}
