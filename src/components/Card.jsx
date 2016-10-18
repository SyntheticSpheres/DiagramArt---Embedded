import React from 'react';
import DiagramArtLibraryActions from '../actions/DiagramArtLibraryActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Card extends React.Component {
    static propTypes = {
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        preview: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.state = {
            image: 'http://www.ecra.gov.sa/Style%20Library/images/load.gif'
        }
        this.downloadingImage = null;
    }

    /**
     *
     */
    componentWillMount() {
        this.downloadingImage = new Image();
        this.downloadingImage.onload = function() {
            this.setState({image: this.props.preview});
        }.bind(this);
        this.downloadingImage.src = this.props.preview;
    }

    /**
     * Stops loading preview image
     * ( so react will not shout, that it is updating state of not existing component )
     */
    componentWillUnmount() {
        this.downloadingImage.src = "";
    }

    showDetail() {
        DiagramArtLibraryActions.showDetail(this.props.id);
    }

    render() {
        return (
            <li className="da-card" onClick={this.showDetail.bind(this)}>
                <div className="da-card-image">
                    <img src={this.state.image} alt={this.props.title} />
                </div>
                <div className="da-card-title">
                    <h3>{this.props.title}</h3>
                </div>
            </li>
        );
    }
}

export default Card;
