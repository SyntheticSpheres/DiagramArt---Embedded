import Routes from '../constants/Routes.js';
import DiagramArtDetailActions from '../actions/DiagramArtDetailActions.js';

const diagram = {
    load: function(id) {
        console.log("diagram.load(" + id + ")");
        $.ajax({
            url: Routes.DIAGRAM_DETAIL + id,
            type: "GET",
            success: function(data) {
                DiagramArtDetailActions.diagramLoaded(data.product);
            }.bind(this)
        });
    },
};

export default diagram;
