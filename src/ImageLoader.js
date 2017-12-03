import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from './Loader';
import './Detail.css';

class ImageLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
    };

    this.image = new Image();
  }

  componentDidMount() {
    this.image.onload = () => {
      this.setState({loading: false});
    };
    this.image.src = this.props.image;
  }

  componentWillUnmount() {
    this.image.src = '';
  }

  render() {
    if (this.state.loading) {
      return ( <Loader /> );
    } else {
      return ( <img src={this.props.image} alt="" /> );
    }
  }
}

ImageLoader.propTypes = {
  image: PropTypes.string.isRequired,
}

export default ImageLoader;
