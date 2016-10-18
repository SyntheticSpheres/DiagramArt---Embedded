# Detail

DiagramArt Detail is a widget to preview diagram detail.

## Embed

If you want to add any diagram from DiagramArt to your page, just add the code below wherever you want to display it and change `<PRODUCT ID>` to the real product ID you find in Info tab.

```
<iframe src="https://diagramart.com/pages/embed?id=<PRODUCT ID>"></iframe>
```

## Advanced

This is for advanced users, who knows how to use JavaScript libraries ( like jQuery ). You need to follow a few steps to add diagram detail to your site.

### CSS

Add DiagramArt Detail theme CSS to your page. Insert this code between <head> and </head> tags.

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

### Create element

Place a `<div>` tag into your page, where you want to render the DiagramArt detail. It has to have an ID, so you can target it later.

```
    ...
    <div id="da-detail"></div>
    ...
```

### Load our JavaScript library

The last step is to load the javascript library and initialize the widget.

The DiagramArtDetail function takes an object as its parameter, where you have to specify the element's ID where it has to be rendered and the diagram ID of diagram that you want to be displayed.

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

## More

There are a few more options you can set when initializing the widget.

### Display type

There are three available "themes", so you can choose how the detail is displayed on your page.

As a card :

```
<script>
    DiagramArtDetail({
        selector:"da-detail",
        detail: {
            type: "card"
        },
        diagramId: 4902083204
    });
</script>
```

Tabbed informations are next to the preview image :

```
<script>
    DiagramArtDetail({
        selector:"da-detail",
        detail: {
            type: "abreast"
        },
        diagramId: 4902083204
    });
</script>
```

Tabbed informations are below the preview image :

```
<script>
    DiagramArtDetail({
        selector:"da-detail",
        detail: {
            type: "under"
        },
        diagramId: 4902083204
    });
</script>
```

## Source code and Examples

You can find the source code on [GitHub](https://github.com/SyntheticSpheres/DiagramArt---Embedded), and there are couple of examples in [example folder](https://github.com/SyntheticSpheres/DiagramArt---Embedded/tree/master/examples/detail).
