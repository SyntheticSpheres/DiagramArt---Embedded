import EventEmitter from 'events';
import Constants from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';

var LIST_CHANGE_EVENT = "change";

/**
 *
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramListStore extends EventEmitter {
    constructor() {
        super();
        this.library = [];
    }

    emitChange() {
        this.emit(LIST_CHANGE_EVENT);
    }

    /**
     *
     * @param function callback
     */
    addChangeListener(callback) {
        this.on(LIST_CHANGE_EVENT, callback);
    }

    /**
     *
     * @param function callback
     */
    removeChangeListener(callback) {
        this.removeListener(LIST_CHANGE_EVENT, callback);
    }

    getState() {
        return {
            library: this.library
        };
    }

    /**
     *
     * @param array library
     */
    setLibrary(library) {
        this.library = library;
    }
}

const diagramListStore = new DiagramListStore();

diagramListStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.LIBRARY_LOAD_SUCCESSFUL:
            diagramListStore.setLibrary(action.library);
            break;
    }
    diagramListStore.emitChange();
    return true;
});

export default diagramListStore;
