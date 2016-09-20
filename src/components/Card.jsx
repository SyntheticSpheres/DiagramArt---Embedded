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
    }

    /**
     *
     */
    componentWillMount() {
        var downloadingImage = new Image();
        downloadingImage.onload = function() {
            this.setState({image: this.props.preview});
        }.bind(this);
        downloadingImage.src = this.props.preview;
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
