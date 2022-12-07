/** @jsx jsx */
import { jsx, css, Global } from "@emotion/core";
import { Fragment } from "react";
import { render } from "react-dom";

import Ikigai from "./Ikigai";

// TODO:
// - Color picker
// - Question labels (what you love, what the world needs, what can you be paid for, what you are good at)
// - Edit segment names (love, world, wealth, talent)
// - Notes
// - Clip labels (mission, vocation etc.)
// - Hint labels (love name + world name, world name + wealth name)
// - Saving
// - Presets
// - Elevator pitch / moto
// - Hinduism relation to Ikigai through Puruṣārtha
// - Generator from a list of segments
// - Delay button for the generator to prevent mindless spamming

function App() {
  return (
    <Fragment>
      <Global
        styles={css`
          body {
            margin: 0;
          }
        `}
      />
      <Ikigai
        love="gaming"
        world="mankind growth"
        wealth="dev services"
        talent="programming"
      />
    </Fragment>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
