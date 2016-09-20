import EventEmitter from 'events';
import Constants from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

var DETAIL_CHANGE_EVENT = "change";

/**
 *
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramArtDetailStore extends EventEmitter {
    constructor() {
        super();
        this.diagram = {
            id: 0,
            title: "",
            image: {
                src: ""
            }
        };
    }

    emitChange() {
        this.emit(DETAIL_CHANGE_EVENT);
    }

    /**
     *
     * @param function callback
     */
    addChangeListener(callback) {
        this.on(DETAIL_CHANGE_EVENT, callback);
    }

    /**
     *
     * @param function callback
     */
    removeChangeListener(callback) {
        this.removeListener(DETAIL_CHANGE_EVENT, callback);
    }

    getState() {
        return {
            diagram: this.diagram
        };
    }

    /**
     *
     * @param object diagram
     */
    setDiagram(diagram) {
        this.diagram = diagram;
    }
}

const diagramArtDetailStore = new DiagramArtDetailStore();

diagramArtDetailStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.DIAGRAM_LOAD_SUCCESSFUL:
            diagramArtDetailStore.setDiagram(action.diagram);
            console.log("diagram set");
            break;
    }
    diagramArtDetailStore.emitChange();
    return true;
});

export default diagramArtDetailStore;
