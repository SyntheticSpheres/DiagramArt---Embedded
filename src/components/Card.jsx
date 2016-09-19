import React from 'react';
import DiagramArtLibraryActions from '../actions/DiagramArtLibraryActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    showDetail() {
        DiagramArtLibraryActions.showDetail(this.props.id);
    }

    render() {
        return (
            <li className="da-card" onClick={this.showDetail.bind(this)}>
                <div className="da-card-image">
                    <img src={this.props.preview} />
                </div>
                <div className="da-card-title">
                    <h3>{this.props.title}</h3>
                </div>
            </li>
        );
    }
}

export default Card;
