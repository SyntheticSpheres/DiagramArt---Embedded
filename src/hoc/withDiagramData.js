import React, { Component } from 'react';
import Loader from '../Loader';

const getDiagramUrl = (id) => `https://api.diagramart.com/v1/ed/getDiagram/${id}`;

export default function withDiagramData(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        diagram: {}
      };
    }

    componentDidMount() {
      fetch(getDiagramUrl(this.props.id))
        .then((response) => {
          return response.json();
        })
        .then((obj) => {
          this.setState({diagram: obj.product});
        });
    }

    render() {
      return ( <WrappedComponent diagram={this.state.diagram} /> );
    }
  };
}
