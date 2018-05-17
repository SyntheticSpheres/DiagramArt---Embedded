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
    this.image.onload = () => {
      this.setState({ loading: false });
    };
  }

  componentDidMount() {
    this.image.src = this.props.image;
  }

  componentWillUnmount() {
    this.image.src = '';
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.image !== nextProps.image) {
      this.image.src = nextProps.image;
      this.setState({ loading: true });
      return true;
    }
    return this.state.loading !== nextState.loading;
  }

  render() {
    if (this.state.loading) {
      return ( <Loader /> );
    }
    return (
      <img src={this.props.image} alt="" />
    );
  }
}

ImageLoader.propTypes = {
  image: PropTypes.string.isRequired,
}

export default ImageLoader;
