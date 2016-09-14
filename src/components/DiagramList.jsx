import React from 'react';
import EmptyCard from './EmptyCard.jsx';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class DiagramList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <ul className="da-list">
                        <EmptyCard />
                    </ul>
                </div>
                <div>
                    <ul className="da-list-page">
                        <li>1</li>
                        <li>2</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default DiagramList;
