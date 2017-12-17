import React, { Component } from 'react';
import './ShadowBox.css';

class ShadowBox extends Component {
  constructor(props) {
    super(props);

    this.onClose = this.onClose.bind(this);
    this.onContentClick = this.onContentClick.bind(this);
  }

  onClose(event) {
    event.stopPropagation();
    this.props.onClick();
  }

  onContentClick(event) {
    event.stopPropagation();
  }

  render() {
    return (
    <div className="da-shadow-box" onClick={this.onClose}>
      <div className="content" onClick={this.onContentClick}>
          {this.props.children}
      </div>
      </div>
    );
  }
}

export default ShadowBox;
