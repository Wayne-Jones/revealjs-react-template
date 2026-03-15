# Reveal.js + React Slideshow Template

A modern, React-based template for creating beautiful slideshow presentations using Reveal.js. This template combines the power of React components with Reveal.js's presentation framework to create interactive, animated slideshows.

## ✨ Features

- **React Components**: Use familiar React syntax with dedicated components like `<Slide>`, `<Fragment>`, `<Stack>`, and `<Code>`
- **TypeScript Support**: Full TypeScript support for better development experience
- **Hot Module Replacement**: Fast development with Vite's HMR
- **Speaker Notes**: Built-in speaker notes support with dedicated speaker view
- **Fragments**: Animate content in sequence using Fragment components
- **Code Highlighting**: Syntax-highlighted code blocks with the Code component
- **Vertical Slides**: Support for nested vertical slides
- **Themes**: Multiple Reveal.js themes included
- **Plugins**: Notes, Highlight, Markdown, Search, and Zoom plugins enabled
- **Responsive**: Works on desktop and mobile devices

## 🚀 Getting Started

### Prerequisites

- Node.js (v24 or higher)
- pnpm (recommended) or npm

### Installation

1. Clone this repository:

```bash
git clone <your-repo-url>
cd revealjs-react-template
```

2. Install dependencies:

```bash
pnpm install
```

3. Start the development server:

```bash
pnpm run dev
```

4. Open your browser to `http://localhost:5173` to view the slideshow

### Build for Production

```bash
pnpm run build
```

### Preview Production Build

```bash
pnpm run preview
```

## 📖 Usage

### Basic Structure

The main presentation is defined in `src/Presentation.tsx`. Here's the basic structure:

```tsx
import { Deck, Slide, Stack, Fragment, Code } from "@revealjs/react";

function Presentation() {
  return (
    <Deck plugins={[Notes, Highlight, Markdown, Search, Zoom]}>
      <Slide>
        <h1>Your Title</h1>
        <p>Your content here</p>
      </Slide>

      <Slide>
        <h2>Another Slide</h2>
        {/* More content */}
      </Slide>
    </Deck>
  );
}
```

### Available Components

#### `<Deck>`

The root component that wraps all slides. Supports plugins and configuration options.

```tsx
<Deck plugins={[Notes, Highlight]}>{/* Slides go here */}</Deck>
```

#### `<Slide>`

Represents a single slide. Supports background colors and other slide-specific options.

```tsx
<Slide background="#1f2937">
  <h2>Slide with Background</h2>
  <p>Content here</p>
</Slide>
```

#### `<Fragment>`

Animates content in sequence. Content wrapped in Fragment components will appear one at a time.

```tsx
<Stack>
  <Fragment>
    <p>First item appears</p>
  </Fragment>
  <Fragment>
    <p>Second item appears after clicking</p>
  </Fragment>
</Stack>
```

#### `<Stack>`

Groups fragments together for sequential animation.

#### `<Code>`

Displays syntax-highlighted code blocks.

```tsx
<Code language="javascript">{`
// Your code here
function hello() {
  console.log('Hello, world!');
}
`}</Code>
```

### Speaker Notes

Add speaker notes using `<aside className="notes">`:

```tsx
<Slide>
  <h1>Main Content</h1>
  <aside className="notes">
    These notes only appear in speaker view (press 'S')
  </aside>
</Slide>
```

### Vertical Slides

Create vertical stacks by enclosing consecutive slides within a `<Stack>` component:

```tsx
<Stack>
  <Slide>
    <h2>Main Topic</h2>
  </Slide>

  <Slide>
    <h3>Subtopic 1</h3>
    <p>Vertical slide content</p>
  </Slide>

  <Slide>
    <h3>Subtopic 2</h3>
    <p>More vertical content</p>
  </Slide>
</Stack>
```

Use up/down arrow keys to navigate between vertical slides within the stack.

## ⌨️ Keyboard Shortcuts

- **Arrow Keys**: Navigate between slides (← → for horizontal, ↑ ↓ for vertical)
- **Space**: Next slide/fragment
- **S**: Toggle speaker view (shows notes, current slide, next slide)
- **?**: Show keyboard shortcuts
- **F**: Toggle fullscreen
- **O**: Toggle slide overview
- **Esc**: Exit fullscreen/overview

## 🎨 Customization

### Themes

Change themes by importing different CSS files in `src/Presentation.tsx`:

```tsx
import "reveal.js/theme/black.css"; // Dark theme
import "reveal.js/theme/white.css"; // Light theme
import "reveal.js/theme/league.css"; // Blue theme
import "reveal.js/theme/sky.css"; // Sky blue theme
```

### Plugins

Modify the plugins array in the `<Deck>` component to enable/disable features:

```tsx
import Notes from "reveal.js/plugin/notes";
import Highlight from "reveal.js/plugin/highlight";
import Markdown from "reveal.js/plugin/markdown";
import Search from "reveal.js/plugin/search";
import Zoom from "reveal.js/plugin/zoom";

<Deck plugins={[Notes, Highlight, Markdown, Search, Zoom]}>
```

### Deck Options

Configure Reveal.js behavior by passing options to the `<Deck>` component:

```tsx
<Deck
  plugins={[Notes]}
  options={{
    transition: "slide",
    transitionSpeed: "default",
    center: true,
    hash: true,
  }}
>
```

## 🛠️ Development

### Project Structure

```
src/
├── main.tsx          # Application entry point
├── Presentation.tsx  # Main presentation component
└── ...
public/               # Static assets
vite.config.ts        # Vite configuration
package.json          # Dependencies and scripts
```

### Adding New Slides

1. Edit `src/Presentation.tsx`
2. Add new `<Slide>` components inside the `<Deck>`
3. Use React components and JSX for content
4. Add speaker notes with `<aside className="notes">`

### Styling

- Use standard CSS classes and inline styles
- Reveal.js provides utility classes like `.fragment` for animations
- Custom CSS can be added to slides using `style` prop or CSS modules

### ESLint Configuration

This project uses **ESLint v10** with TypeScript support for code linting and formatting. The configuration is defined in `eslint.config.ts`.

#### Available Scripts

```bash
# Run ESLint on all files
pnpm run lint

# Fix auto-fixable ESLint issues
pnpm run lint -- --fix
```

#### ESLint Features

- **ESLint v10**: Latest version with flat config support
- **TypeScript**: Full TypeScript linting with `@typescript-eslint`
- **React**: React-specific rules including hooks validation
- **Vite**: Vite-specific rules for hot module replacement
- **Plugins**: Includes Highlight, Markdown, Search, and Zoom plugins

#### Configuration Structure

The ESLint config (`eslint.config.ts`) includes:

- **Base Rules**: JavaScript recommended rules
- **TypeScript Rules**: TypeScript-specific linting
- **React Rules**: React hooks and component validation
- **Vite Rules**: Development server optimization rules

#### Customizing ESLint

To modify the ESLint configuration:

1. Edit `eslint.config.ts`
2. Add or modify rules in the configuration array
3. Restart your development server if needed

Example of adding a custom rule:

```typescript
const config = [
  // ... existing config
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      // Add custom rules here
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
```

## 📦 Dependencies

- **@revealjs/react**: React wrapper for Reveal.js
- **reveal.js**: Core presentation framework
- **react**: UI library
- **vite**: Build tool and dev server
- **typescript**: Type safety

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🔗 Resources

- [Reveal.js Documentation](https://revealjs.com/)
- [@revealjs/react Documentation](https://github.com/hakimel/reveal.js/tree/master/plugin/notes)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
