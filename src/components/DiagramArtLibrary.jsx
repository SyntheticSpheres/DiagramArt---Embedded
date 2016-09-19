import React from 'react';
import Menu from './Menu.jsx';
import DiagramList from './DiagramList.jsx';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramArtLibrary extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="da-library">
                <Menu />
                <DiagramList />
            </div>
        );
    }
}

export default DiagramArtLibrary;
