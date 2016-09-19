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
        this.setState({query: event.target.value});
    }

    render() {
        return (
            <nav className="da-navbar">
                <ul>
                    <li><a href="https://diagramart.com" target="_blank"><img src="https://cdn.shopify.com/s/files/1/0255/1589/t/7/assets/diagramart_logo_with_tm.png?14105803135550891160" alt="diagramart logo" height="50" /></a></li>
                </ul>
                <form className="da-nav-form da-nav-right">
                    <input type="text" className="da-form-input" value={this.state.query} onChange={this.handleQueryChange.bind(this)} placeholder="search" />
                </form>
            </nav>
        );
    }
}

export default Menu;
