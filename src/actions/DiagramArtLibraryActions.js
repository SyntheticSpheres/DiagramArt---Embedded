import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const DiagramArtLibraryActions = {
    /**
     *
     * @param number diagramId
     */
    showDetail: function(diagramId) {
        console.log("DiagramArtLibraryActions.showDetail(" + diagramId + ")");
        AppDispatcher.handleAction({
            actionType: Constants.VIEW_DETAIL,
            diagramId: diagramId
        });
    },

    /**
     *
     */
    hideDetail: function() {
        console.log("DiagramArtLibraryActions.hideDetail()");
        AppDispatcher.handleAction({
            actionType: Constants.HIDE_DETAIL
        });
    },
};

export default DiagramArtLibraryActions;
