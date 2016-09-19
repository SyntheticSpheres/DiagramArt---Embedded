import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import LibraryUtils from '../utils/library';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const DiagramListActions = {
    /**
     *
     */
    loadLibrary: function(query, page, limit) {
        console.log("DiagramListActions.loadLibrary()");
        AppDispatcher.handleAction({
            actionType: Constants.LIBRARY_LOAD,
            query: query,
            page: page,
            limit: limit
        });
        LibraryUtils.load(query, page, limit);
    },

    /**
     *
     */
    libraryLoaded: function(library) {
        console.log("DiagramListActions.libraryLoaded(" + library + ")");
        AppDispatcher.handleAction({
            actionType: Constants.LIBRARY_LOAD_SUCCESSFUL,
            library: library
        });
    }
};

export default DiagramListActions;
