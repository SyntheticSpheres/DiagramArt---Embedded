# [DiagramArt---Embedded](https://github.com/SyntheticSpheres/DiagramArt---Embedded)

[![Build Status](https://travis-ci.org/SyntheticSpheres/DiagramArt---Embedded.svg?branch=master)](https://travis-ci.org/SyntheticSpheres/DiagramArt---Embedded)
[![codecov](https://codecov.io/gh/SyntheticSpheres/DiagramArt---Embedded/branch/master/graph/badge.svg)](https://codecov.io/gh/SyntheticSpheres/DiagramArt---Embedded)

DiagramArt widget.

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
