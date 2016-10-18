import React from 'react';
import DiagramListActions from '../actions/DiagramListActions.js';
import DiagramListStore from '../stores/DiagramListStore.js';
import Card from './Card.jsx';
import EmptyCard from './EmptyCard.jsx';
import Paginator from './Paginator.jsx';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramList extends React.Component {
    constructor(props) {
        super(props);
        this.state = DiagramListStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        DiagramListStore.addChangeListener(this.onChange);
        DiagramListActions.loadLibrary(this.state.query, this.state.page, this.state.limit);
    }

    componentWillUnmount() {
        DiagramListStore.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState(DiagramListStore.getState());
    }

    render() {
        var cards = [];
        if( this.state.library.length > 0 ) {
            for( var i = 0; i < this.state.library.length; i++ ) {
                cards.push(<Card key={this.state.library[i]["PRODUCT ID"]} id={this.state.library[i]["PRODUCT ID"]} title={this.state.library[i]["PRODUCT NAME"]} preview={this.state.library[i]["PRODUCT PREVIEW PICTURE"]} />);
            }
        } else {
            cards.push(<EmptyCard key="empty" />);
        }

        return (
            <div className="da-container">
                <div className="da-list">
                    <ul>
                        {cards}
                    </ul>
                </div>
                <div className="da-pagination">
                    <Paginator page={this.state.page} total={Math.ceil(this.state.total / this.state.limit)} query={this.state.query} />
                </div>
            </div>
        );
    }
}

export default DiagramList;
