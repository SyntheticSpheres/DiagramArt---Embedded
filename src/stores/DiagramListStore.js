import EventEmitter from 'events';
import Constants from '../constants/Constants.js';
import AppDispatcher from '../dispatcher/AppDispatcher.js';
import Settings from '../constants/Settings.js';

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
        this.query = "",
        this.page = 1;
        this.limit = Settings.pagination.limit;
        this.total = 0;
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
            library: this.library,
            query: this.query,
            page: this.page,
            limit: this.limit,
            total: this.total
        };
    }

    /**
     *
     * @param array library
     */
    setLibrary(library) {
        this.library = library;
    }

    setPage(page) {
        this.page = page;
    }

    setTotal(total) {
        this.total = total;
    }

    setQuery(query) {
        this.query = query;
    }
}

const diagramListStore = new DiagramListStore();

diagramListStore.dispatchToken = AppDispatcher.register(function(payload) {
    let action = payload.action;

    switch(action.actionType) {
        case Constants.LIBRARY_LOAD:
            diagramListStore.setQuery(action.query);
            diagramListStore.setPage(action.page);
            break;
        case Constants.LIBRARY_LOAD_SUCCESSFUL:
            diagramListStore.setLibrary(action.library);
            diagramListStore.setTotal(action.total);
            break;
    }
    diagramListStore.emitChange();
    return true;
});

export default diagramListStore;
