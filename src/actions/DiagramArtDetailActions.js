import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Constants from '../constants/Constants.js';
import DiagramUtils from '../utils/diagram';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
const DiagramArtDetailActions = {
    /**
     *
     */
    loadDiagram: function(diagramId) {
        console.log("DiagramArtDetailActions.loadDiagram(" + diagramId + ")");
        AppDispatcher.handleAction({
            actionType: Constants.DIAGRAM_LOAD,
            diagramId: diagramId
        });
        DiagramUtils.load(diagramId);
    },

    diagramLoaded: function(diagram) {
        console.log("DiagramArtDetailActions.diagramLoaded(" + diagram + ")");
        AppDispatcher.handleAction({
            actionType: Constants.DIAGRAM_LOAD_SUCCESSFUL,
            diagram: diagram
        });
    }
};

export default DiagramArtDetailActions;
