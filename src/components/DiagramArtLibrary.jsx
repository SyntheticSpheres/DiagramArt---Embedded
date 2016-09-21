import React from 'react';
import Menu from './Menu.jsx';
import DiagramList from './DiagramList.jsx';
import ShadowBox from './ShadowBox.jsx';
import DiagramArtDetail from './DiagramArtDetail.jsx';
import DiagramArtLibraryStore from '../stores/DiagramArtLibraryStore.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramArtLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = DiagramArtLibraryStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        DiagramArtLibraryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        DiagramArtLibraryStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(DiagramArtLibraryStore.getState());
    }

    render() {
        var diagramDetail = null;
        if( this.state.showDiagramDetail ) {
            diagramDetail = (
                <ShadowBox>
                    <DiagramArtDetail id={this.state.diagramId} />
                </ShadowBox>
            );
        }
        return (
            <div className="da-library">
                <Menu />
                <DiagramList />
                {diagramDetail}
            </div>
        );
    }
}

export default DiagramArtLibrary;
