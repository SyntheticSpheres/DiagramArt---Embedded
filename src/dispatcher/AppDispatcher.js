//var Dispatcher = require('flux').Dispatcher;
import { Dispatcher } from 'flux';
import Constants from '../constants/Constants.js';

class DiagramArtDispatcher extends Dispatcher {
    handleAction(action) {
        this.dispatch({
            source: '',
            action: action
        });
    }
}

const AppDispatcher = new DiagramArtDispatcher();

export default AppDispatcher;
