# aurelia-material-design-lite

A [Material Design Lite](https://github.com/google/material-design-lite) plugin for [Aurelia](https://github.com/aurelia/framework).

## Getting Started

1. Install the plugin ([docs](http://jspm.io/docs/installing-packages.html)):

  ```shell
  jspm install aurelia-material-design-lite
  ```
2. Import the plugin ([docs](http://aurelia.io/docs#/aurelia/framework/latest/doc/article/app-configuration-and-startup/7)):

  ```javascript
  // main.js
  export function configure(aurelia) {
    aurelia.use
      .standardConfiguration()
      .developmentLogging()
      .plugin('aurelia-material-design-lite'); // add this line

    aurelia.start().then(() => aurelia.setRoot());
  }
  ```
3. Include Material Design Lite using **one** of the methods below:
  - from CDN ([docs](https://getmdl.io/started/index.html#download)):
  <br>Version `1.2.0` is just as example.

    ```html
    <!-- index.html -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://code.getmdl.io/1.2.0/material.indigo-pink.min.css">
    <script defer src="https://code.getmdl.io/1.2.0/material.min.js"></script>
    ```
  - using Aurelia ([docs](http://aurelia.io/hub.html#/doc/article/aurelia/templating/latest/templating-basics/6))

    ```html
    <!-- app.html -->
    <require from="material-design-lite/material.css"></require>
    <require from="material-design-lite/material.js"></require>
    ```

    ```html
    <!-- index.html -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    ```

## Using the plugin

Add one `mdl` attribute to elements that have a `mdl-js-component` class (`mdl-js-button`, `mdl-js-layout`, `mdl-js-progress`, etc.):
```html
<button mdl class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent">
  Button
</button>
```
The `mdl` attribute is not required for elements that do not have a `mdl-js-component` class.

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
