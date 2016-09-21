import EventEmitter from 'events';
import Constants from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

var LIBRARY_CHANGE_EVENT = "change";

/**
 *
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramArtLibraryStore extends EventEmitter {
    constructor() {
        super();
        this.diagramId = null;
        this.showDiagramDetail = false;
    }

    emitChange() {
        this.emit(LIBRARY_CHANGE_EVENT);
    }

    /**
     *
     * @param function callback
     */
    addChangeListener(callback) {
        this.on(LIBRARY_CHANGE_EVENT, callback);
    }

    /**
     *
     * @param function callback
     */
    removeChangeListener(callback) {
        this.removeListener(LIBRARY_CHANGE_EVENT, callback);
    }

    getState() {
        return {
            diagramId: this.diagramId,
            showDiagramDetail: this.showDiagramDetail
        };
    }

    /**
     *
     * @param number diagramId
     */
    setDiagramId(diagramId) {
        this.diagramId = diagramId;
    }

    setShowDiagramDetail(show) {
        this.showDiagramDetail = show;
    }
}

const diagramArtLibraryStore = new DiagramArtLibraryStore();

diagramArtLibraryStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.VIEW_DETAIL:
            diagramArtLibraryStore.setDiagramId(action.diagramId);
            diagramArtLibraryStore.setShowDiagramDetail(true);
            break;
        case Constants.HIDE_DETAIL:
            diagramArtLibraryStore.setShowDiagramDetail(false);
            break;
    }
    diagramArtLibraryStore.emitChange();
    return true;
});

export default diagramArtLibraryStore;
