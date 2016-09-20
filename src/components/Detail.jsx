import React from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Detail extends React.Component {
    static propTypes = {
        diagram: React.PropTypes.object
    };

    constructor(props) {
        super(props);
        this.state = {
            image: 'http://www.ecra.gov.sa/Style%20Library/images/load.gif'
        }
    }

    componentWillMount() {
        var downloadingImage = new Image();
        downloadingImage.onload = function() {
            this.setState({image: this.props.diagram.image.src});
        }.bind(this);
        consolel.log(this.props.diagram.image.src);
        downloadingImage.src = this.props.diagram.image.src;
    }

    render() {
        return (
            <div className="da-detail">
                <h1>{this.props.diagram.title}</h1>
                <div className="da-half-column">
                    <img src={this.state.image} alt={this.props.diagram.title} />
                </div>
                <div className="da-half-column">

                </div>
            </div>
        );
    }
}

export default Detail;
