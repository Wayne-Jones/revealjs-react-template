import { Deck, Slide, Stack, Fragment, Code } from "@revealjs/react";
import Notes from "reveal.js/plugin/notes";
import Highlight from "reveal.js/plugin/highlight";
import Markdown from "reveal.js/plugin/markdown";
import Search from "reveal.js/plugin/search";
import Zoom from "reveal.js/plugin/zoom";
import Math from "reveal.js/plugin/math";
import "reveal.js/reveal.css";
import "reveal.js/theme/black.css";
import "reveal.js/plugin/highlight/monokai.css";

function Presentation() {
  return (
    <Deck plugins={[Notes, Highlight, Markdown, Search, Zoom, Math]}>
      {/* Title Slide */}
      <Slide>
        <h1>Welcome to Reveal.js</h1>
        <p>A basic slideshow implementation</p>
        <aside className="notes">
          This is the title slide. Presenter notes appear here when using
          Speaker View.
        </aside>
      </Slide>

      {/* Content Slide with Fragments */}
      <Slide>
        <h2>Key Features</h2>
        <Stack>
          <Fragment>
            <p>Animated transitions</p>
          </Fragment>
          <Fragment>
            <p>Vertical and horizontal slides</p>
          </Fragment>
          <Fragment>
            <p>Speaker notes support</p>
          </Fragment>
          <Fragment>
            <p>Keyboard and pointer controls</p>
          </Fragment>
        </Stack>
        <aside className="notes">
          Fragments appear one at a time. Click or use arrow keys to advance.
        </aside>
      </Slide>

      {/* Vertical Slides */}
      <Stack>
        <Slide>
          <h2>Main Topic</h2>
          <p>Click down arrow to explore subtopics</p>
        </Slide>
        <Slide>
          <h3>Subtopic 1</h3>
          <p>This is a vertical slide beneath the main topic.</p>
        </Slide>

        <Slide>
          <h3>Subtopic 2</h3>
          <p>Navigate vertically with up/down arrows.</p>
        </Slide>
      </Stack>

      {/* Colored Background Slide */}
      <Slide background="#1f2937">
        <h2>Styling Options</h2>
        <p>You can customize background colors and themes</p>
        <aside className="notes">This slide has a dark gray background.</aside>
      </Slide>

      {/* Code Slide */}
      <Slide>
        <h2>Code Example</h2>
        <Code language="javascript">
          {`// Sample React component
function Button() {
  return <button>Click me</button>;
}`}
        </Code>
        <aside className="notes">
          Display code snippets with proper formatting.
        </aside>
      </Slide>

      {/* Closing Slide */}
      <Slide background="#111827">
        <h1>Thank You</h1>
        <p>Questions?</p>
        <aside className="notes">
          Press 'S' to open speaker view. Press '?' for keyboard shortcuts.
        </aside>
      </Slide>
    </Deck>
  );
}

export default Presentation;
