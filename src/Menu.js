import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Menu.css';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({query: event.target.value}, () => { this.props.onQueryChange(this.state.query); });
  }

  render() {
    return (
      <nav className="da-navbar">
        <ul>
          <li><a href="https://diagramart.com" target="_blank" rel="noopener noreferrer"><img src="https://cdn.shopify.com/s/files/1/0255/1589/t/7/assets/diagramart_logo_with_tm.png?14105803135550891160" alt="diagramart logo" height="50" /></a></li>
        </ul>
        <form className="da-nav-form da-nav-right">
          <input type="text" className="da-form-input" value={this.state.query} onChange={this.handleChange} />
        </form>
      </nav>
    );
  }
}

Menu.propTypes = {
  onQueryChange: PropTypes.func.isRequired,
}

export default Menu;
