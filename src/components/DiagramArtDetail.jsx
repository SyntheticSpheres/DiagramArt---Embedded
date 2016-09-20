import React from 'react';
import Menu from './Menu.jsx';
import Detail from './Detail.jsx';
import DiagramArtDetailActions from '../actions/DiagramArtDetailActions.js';
import DiagramArtDetailStore from '../stores/DiagramArtDetailStore.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramArtDetail extends React.Component {
    static propTypes = {
        id: React.PropTypes.number
    };

    constructor(props) {
        super(props);
        this.state = {
            diagram: {
                id: 0,
                title: "",
                image: {
                    src: ""
                }
            }
        }
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        DiagramArtDetailStore.addChangeListener(this.onChange);
        DiagramArtDetailActions.loadDiagram(this.props.id);
    }

    componentWillUnmount() {
        DiagramArtDetailStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(DiagramArtDetailStore.getState());
    }

    render() {
        return (
            <div>
                <Detail diagram={this.state.diagram} />
            </div>
        );
    }
}

export default DiagramArtDetail;
