# aurelia-material-design-lite

A [Material Design Lite](https://github.com/google/material-design-lite) plugin for [Aurelia](https://github.com/aurelia/framework).

## Getting Started

1. Install Material Design Lite and the plugin.

  ```shell
  jspm install material-design-lite aurelia-material-design-lite
  ```
Learn more: http://jspm.io/docs/installing-packages.html
2. Import the plugin

  ```javascript
  // main.js
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-material-design-lite'); // Add this line

    aurelia.start().then(() => aurelia.setRoot());
  }
  ```
Learn more: http://aurelia.io/docs#/aurelia/framework/latest/doc/article/app-configuration-and-startup/7
3. Import Material Design Lite

  ```html
  <!-- app.html -->
  <require from="material-design-lite"></require>
  <require from="material-design-lite/material.css"></require>
  ```
Learn more: http://aurelia.io/docs#/aurelia/framework/latest/doc/article/cheat-sheet/4
4. Add the `mdl` attribute to all Material Design Lite components

  ```html
  <!-- Note the mdl attribute -->
  <button mdl class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
    Button
  </button>
  ```
The `mdl` attribute must be on the same element that has the `mdl-component` class (`mdl-button`, `mdl-card`, `mdl-dialog`, etc.).<br>Learn more: https://www.getmdl.io/started/index.html#use-components.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.

6. See `gulpfile.js` for other tasks related to generating the docs and linting.

## Running The Tests

To run the unit tests, first ensure that you have followed the steps above in order to install all dependencies and successfully build the library. Once you have done that, proceed with these additional steps:

1. Ensure that the [Karma](http://karma-runner.github.io/) CLI is installed. If you need to install it, use the following command:

  ```shell
  npm install -g karma-cli
  ```
2. Ensure that [jspm](http://jspm.io/) is installed. If you need to install it, use the following commnand:

  ```shell
  npm install -g jspm
  ```
3. Install the client-side dependencies with jspm:

  ```shell
  jspm install
  ```

4. You can now run the tests with this command:

  ```shell
  karma start
  ```
