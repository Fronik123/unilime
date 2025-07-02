# Admin Dashboard

## Description

A simple administrative dashboard in React using Material-UI (MUI).  
Supports light and dark themes, responsive design with mobile menu, tables with sorting and several pages: Overview, Users, Settings.

## Install and run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Fronik123/unilime.git

   ```

2. Go to the project folder:

   ```bash
   cd unilime

   ```

3. Set dependencies:

   ```bash
   npm install

   ```

4. Start the project:

   ```bash
   npm run dev
   ```

## Project structure

- **src/** - application source code
  - **components/** — components
  - **pages/** — application pages
  - **routes/** — route configuration file
  - **styles/** — themes and global styles
  - **App.tsx** — main component with partitioning and routing
  - **index.tsx** — application entry point

## State management

React-hooks (useState) are used for state management.
In particular, theme state (light/dark), opening/closing mobile menu, table sorting are all local states.

## Component structure and reusability

- Props are used to transmit data and control behavior.
- Components like MetricCard or custom Input can be used in different places, which reduces code duplication.
- Styles are set via MUI sx or theme, which simplifies customization.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
