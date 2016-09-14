import React from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class EmptyCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="da-card">
                <div className="da-card-image">
                    <img src="" />
                </div>
                <div className="da-card-title">
                    <h3>Empty card</h3>
                </div>
            </li>
        );
    }
}

export default EmptyCard;