import React, {Component} from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            query: ""
        };
    }

    handleQueryChange(event) {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <nav className="da-navbar">
                <ul>
                    <li><a href="#">DiagramArtLogo</a></li>
                </ul>
                <form>
                    <input type="text" value={this.state.query} onChange={this.handleQueryChange.bind(this)} placeholder="search" />
                </form>
            </nav>
        );
    }
}

export default Menu;
