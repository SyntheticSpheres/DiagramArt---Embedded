import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageLoader from './ImageLoader';
import './Thumbnail.css';

class Thumbnail extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onThumbnailClick(this.props.id);
  }

  render() {
    return (
      <div className="da-thumbnail small" onClick={this.onClick}>
        <div className="da-thumbnail-picture">
          <ImageLoader image={this.props.picture} />
        </div>
        <div className="da-thumbnail-title">
          <h3>{this.props.title}</h3>
        </div>
      </div>
    );
  }
}

Thumbnail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
}

export default Thumbnail;
