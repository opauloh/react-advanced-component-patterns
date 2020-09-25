# advanced-react-component-patterns

This is some components patterns from the [advanced react course](https://egghead.io/lessons/react-implement-component-state-reducers) with Kent C. Dodds with some understanding of mine

## Intro

Here's a little intro to the course material. I hope you enjoy the course!

The goal of this course is to give you the concepts and ideas you need to make components as simple and flexible as possible so you and your team will have an easier time building an amazing UI.

You will learn several patterns in this course (Compound components, render props, Higher Order Components, control props, state reducers, and the Provider pattern etc.) that are used broadly in the JavaScript (and specifically React) ecosystem. Some patterns are two ways of doing the same thing, but you can combine them to create as flexible APIs as your use cases require.

## Dependencies

- react: The aim of this project, is a JavaScript library for creating user interfaces and handle stage management.
- react-dom: In this project is the entry point to the DOM for React
- normalize.css : Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

## Dev Dependencies

- @babel/core: This package is core of the Babel, Babel is a compiler used to execute transformations on javascript, like transform ECMA 6 javascript to ECMA 5, for better compatibility, and support plugins to load javascript, and assets as well.
- @babel/preset-env: This package is used to allow Babel transpile the Javascript necessary accordinly to the necessary target browsers, by used public data from open source projects, the plugin knows if the browser is dead, or used by less than 0.x% of people, so it can transpile only the needed, used to have always the most advanced javascript running, according to the public target (you can specify specific browsers and versions to support as well).
- @babel/preset-react: This is a Babel preset, and is used to convert JSX syntax to React's Syntax, like from `<div>Hello</div>` to React.
- webpack: This package is a static module bundler for Javascript Applications, it is responsible to map every module in the project and generate the desired number of bundles. (or we would have thousand of files being requested, or have to manually minimize them, neither option is a good deal)
- webpack-cli: This package provides a flexible set of commands for developers to increase speed when setting up a custom webpack project, also is needed to actually run the webpack in the command line.
- webpack-dev-server: It is intended to use webpack with a development server that provides live reloading. This should be used for development only. It uses webpack-dev-middleware under the hood, which provides fast in-memory access to the webpack assets, so it is faster, instead of rely on rewriting on the phisicaly on dist folder using the file system.
- html-webpack-plugin: This package is a plugins for our webpack package, and important to note that plugins runs after the modules of webpack resolves, we are using it to generate our index.html file (inside the dist folder when building for production) and applying a `
  <script src="[bundle_name].js"></script>` at our index.html file inside the app folder.
- babel-loader: This package allows transpiling JavaScript files using Babel and webpack, its totally required since we will want to transpile JSX from Javascript Files for development with React.js.
