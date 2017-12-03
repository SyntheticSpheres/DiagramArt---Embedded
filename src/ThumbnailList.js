import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Thumbnail from './Thumbnail';
import './ThumbnailList.css';

class ThumbnailList extends Component {
  render() {
    const thumbnails = this.props.diagrams.map((diagram) => {
      return (<Thumbnail key={diagram.id} id={diagram.id} title={diagram.title} picture={diagram.picture} onThumbnailClick={this.props.onThumbnailClick} />);
    });
    return (
      <div className="da-thumbnail-list">
        {thumbnails}
      </div>
    );
  }
}

ThumbnailList.propTypes = {
  diagrams: PropTypes.array.isRequired,
  onThumbnailClick: PropTypes.func.isRequired,
}

export default ThumbnailList;
