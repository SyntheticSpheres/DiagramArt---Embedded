import Routes from '../constants/Routes.js';
import DiagramListActions from '../actions/DiagramListActions.js';

const library = {
    load: function(query, page, limit) {
        console.log("library.load(" + query + ", " + page + ", " + limit + ")");
        $.ajax({
            url: Routes.DIAGRAM_LIBRARY + query,
            type: "GET",
            success: function(data) {
                DiagramListActions.libraryLoaded(data);
            }.bind(this)
        });
    },
};

export default library;
