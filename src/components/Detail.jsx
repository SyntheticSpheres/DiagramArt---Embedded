import React from 'react';
import Tabs from './tab/Tabs.jsx';
import Pane from './tab/Pane.jsx';
import Settings from '../constants/Settings.js';

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

    /**
     * Default diagram image is none before data are received from the server.
     * Then it updates this component with new data and if image is changed,
     * this loads the image first and when it is fully loaded, it updates the
     * image.
     * @param object nextProps
     */
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
        var detailPartClass = "da-detail-part";
        if( Settings.detail.type === "abreast" ) {
            detailPartClass += " da-half-column";
        } else if( Settings.detail.type === "card" ) {
            detailPartClass += " da-detail-card";
        }

        return (
            <div className={"da-detail" + (Settings.detail.type === "card" ? " da-flipping" : "")}>
                <h1>{this.props.diagram.title}</h1>
                <div className="da-flipper">
                    <div className={detailPartClass}>
                        <div className="da-detail-image">
                          <img src={this.state.image} alt={this.props.diagram.title} />
                        </div>
                    </div>
                    <div className={detailPartClass}>
                        <Tabs className="da-detail-info" selected={0}>
                            <Pane label="Info">
                                <p>CREDITS: </p>
                                <p>ATTRIBUTES: </p>
                                <p>PRODUCT ID: {this.props.diagram.id}</p>
                                <p>AUTHOR: <a href="">{this.props.diagram.vendor}</a></p>
                                <p>LANGUAGE: </p>
                                <p>PRODUCT TYPE: {this.props.diagram.product_type}</p>
                                <p>COLLECTION: </p>
                                <p>LIECNSE: <a href=""></a></p>
                                <p>SHARE: </p>
                            </Pane>
                            <Pane label="Description">
                                {this.props.diagram.body_html}
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
            </div>
        );
    }
}

export default Detail;
