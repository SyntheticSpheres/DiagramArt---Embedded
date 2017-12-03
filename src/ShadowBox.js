import React, { Component } from 'react';
import './ShadowBox.css';

class ShadowBox extends Component {
  render() {
    return (
    <div className="da-shadow-box" onClick={this.props.onClick}>
      <div className="content">
          {this.props.children}
      </div>
      </div>
    );
  }
}

export default ShadowBox;
