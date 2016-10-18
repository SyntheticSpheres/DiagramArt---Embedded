import React from 'react';
import ReactDOM from 'react-dom';
import DiagramArtLibrary from './components/DiagramArtLibrary.jsx';
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
    window.DiagramArtLibrary = function(params) {
        if( !params.selector ) {
            throw "Selector is missing!";
        }
        Settings.merge(params);
        ReactDOM.render(<DiagramArtLibrary limit={params.diagramsPerPage} />, document.getElementById(params.selector));
    }
})();
