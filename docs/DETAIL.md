# Detail

DiagramArt Detail is a widget to preview diagram detail.

## General

You need to add DiagramArt Detail theme CSS to your page. Insert this code
between <head> and </head> tags.

```
<html>
  <head>
    ...
    <link href="./css/da-detail-theme.css" rel="stylesheet" />
    ...
  </head>
  ...
</html>
```

Place a <div> tag into your page, where you want to render the DiagramArt library.
It has to have an ID.

```
    ...
    <div id="da-detail"></div>
    ...
```

The last step is to load the javascript library and initialize the widget.

The DiagramArtDetail function takes an object as its parameter, where you have
to specify the element's ID where it has to be rendered and the diagram ID of
diagram that you want to be displayed.

```
<html>
  <body>
    ...
    <script src="./js/diagramartdetail.js"></script>
    <script>
        DiagramArtDetail({
            selector:"da-detail",
            diagramId: 4902083204
        });
    </script>
  </body>
</html>
```

### Wordpress

If you want to add it into your wordpress theme, you have to modify
*header.php*, *\*-page.php* and *footer.php* file. In these files you find
places mentioned before.

## Examples

You can see some examples [here](https://github.com/SyntheticSpheres/DiagramArt---Embedded/tree/master/examples/detail).
