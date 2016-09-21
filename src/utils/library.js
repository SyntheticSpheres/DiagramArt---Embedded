import Routes from '../constants/Routes.js';/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
import DiagramListActions from '../actions/DiagramListActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const library = {
    /**
     *
     * @param string query
     * @param number page
     * @param number limit
     */
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
