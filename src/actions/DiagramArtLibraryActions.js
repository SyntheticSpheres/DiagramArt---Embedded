import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const DiagramArtLibraryActions = {
    /**
     *
     */
    showDetail: function(diagramId) {
        console.log("DiagramArtLibraryActions.showDetail(" + diagramId + ")");
        AppDispatcher.handleAction({
            actionType: Constants.VIEW_DETAIL,
            diagramId: diagramId
        });
    }
};

export default DiagramArtLibraryActions;
