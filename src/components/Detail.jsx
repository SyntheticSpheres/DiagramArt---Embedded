import React from 'react';
import Tabs from './tab/Tabs.jsx';
import Pane from './tab/Pane.jsx';

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

    componentWillReceiveProps(nextProps) {
        if( this.props.diagram.image.src != nextProps.diagram.image.src ) {
            var downloadingImage = new Image();
            downloadingImage.onload = function() {
                this.setState({image: nextProps.diagram.image.src});
            }.bind(this);
            downloadingImage.src = nextProps.diagram.image.src;
        }
    }

    render() {
        return (
            <div className="da-detail">
                <h1>{this.props.diagram.title}</h1>
                <div className="da-half-column">
                    <div className="da-detail-image">
                      <img src={this.state.image} alt={this.props.diagram.title} />
                    </div>
                </div>
                <div className="da-half-column">
                    <Tabs className="da-detail-info" selected={0}>
                        <Pane label="Info">
                            <p>CREDITS: </p>
                            <p>ATTRIBUTES: </p>
                            <p>PRODUCT ID: {this.props.diagram.id}</p>
                            <p>AUTHOR: <a href="">{this.props.diagram.vendor}</a></p>
                            <p>LANGUAGE: </p>
                            <p>PRODUCT TYPE: </p>
                            <p>COLLECTION: </p>
                            <p>LIECNSE: <a href=""></a></p>
                            <p>SHARE: </p>
                        </Pane>
                        <Pane label="Description">

                        </Pane>
                        <Pane label="Methods">
                            <p>DIAGRAM TYPE:</p>
                        </Pane>
                        <Pane label="Usage">
                            <p>TOOL:</p>
                            <p></p>
                        </Pane>
                        <Pane label="Market">
                            <p>AUDIENCE:</p>
                            <p>INDUSTRY:</p>
                        </Pane>
                        <Pane label="Embed">
                            <textarea>{"<iframe src=" + '"' + "https://diagramart.com/pages/embed?id=" + this.props.diagram.id + '"></iframe>'}</textarea>
                        </Pane>
                    </Tabs>
                </div>
            </div>
        );
    }
}

export default Detail;
