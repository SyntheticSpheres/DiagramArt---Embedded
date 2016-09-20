import React from 'react';
import ReactDOM from 'react-dom';
import DiagramArtDetail from './components/DiagramArtDetail.jsx';
import Settings from './constants/Settings.js';

/*
 * element ID
 * language
 * items per page
 * access token
 *
 *
 */

(function(){
    window.DiagramArtDetail = function(params) {
        if( !params.selector ) {
            throw "Selector is missing!";
        }
        if( !params.diagramId ) {
            throw "Diagram ID is missing!";
        }
        Settings.merge(params);
        ReactDOM.render(<DiagramArtDetail id={params.diagramId} />, document.getElementById(params.selector));
    }
})();
