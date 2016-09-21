# [DiagramArt---Embedded](https://github.com/SyntheticSpheres/DiagramArt---Embedded)

## Tech

Dependencies and build :

* [Node's NPM](https://www.npmjs.com/)
* [Webpack](https://webpack.github.io/)

Source code :

* [React](https://facebook.github.io/react/)
* [Flux](https://facebook.github.io/flux/)
* [Babel](http://babeljs.io/)

## Install

Download all dependencies :

```
npm install
```

### Development build

Builds whole project with React warnings, console logs, etc.

```
webpack
```

### Production build

Builds whole project, that is ready for production ( no warnings, no console logs ).

```
webpack --config webpack.production.config.js
```

## DiagramArt Library

```
<body>
    ...
    <div id="daLibrary"></div>
    ...
    <script src="./js/diagramartlibrary.js"></script>
    <script>
        DiagramArtLibrary({
            selector:"daLibrary" /* ID of element where it will be rendered */
        });
    </script>
</body>
```

### Settings

## DiagramArt detail

```
<body>
    ...
    <div id="daDetail"></div>
    ...
    <script src="./js/diagramartdetail.js"></script>
    <script>
        DiagramArtDetail({
            selector:"daDetail", /* ID of element where it will be rendered */
            diagramId: 4902083204 /* diagram ID */
        });
    </script>
</body>
```

### Settings
