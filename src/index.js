import React from 'react';
import ReactDOM from 'react-dom';
import Library from './Library';
import Detail from './Detail';

(function(){
  window.DiagramArtLibrary = function(params) {
    if( !params.selector ) {
      throw new Error('Selector is missing!');
    }
    ReactDOM.render(<Library />, document.getElementById(params.selector));
  }
  window.DiagramArtDetail = function(params) {
    if( !params.selector ) {
      throw new Error('Selector is missing!');
    }

    if( !params.id ) {
      throw new Error('Diagram ID is missing!');
    }
    ReactDOM.render(<Detail id={params.id} />, document.getElementById(params.selector));
  }
})();
