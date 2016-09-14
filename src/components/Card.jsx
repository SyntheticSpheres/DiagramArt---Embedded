import React from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="da-card">
                <div class="da-card-image">
                    <img src="" />
                </div>
                <div class="da-card-title">
                    <h3>Empty card</h3>
                </div>
            </li>
        );
    }
}

export default Card;
