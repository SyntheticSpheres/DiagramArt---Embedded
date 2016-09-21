import React from 'react';
import DiagramArtLibraryActions from '../actions/DiagramArtLibraryActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class ShadowBox extends React.Component {
    constructor(props) {
        super(props);
    }

    hideShadowBox() {
        DiagramArtLibraryActions.hideDetail();
    }

    render() {
        return (
            <div className="da-shadow-box" onClick={this.hideShadowBox.bind(this)}>
                <div className="da-shadow-box-content">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default ShadowBox;
