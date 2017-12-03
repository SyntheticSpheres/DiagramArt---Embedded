import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Loader from './Loader';
import './Detail.css';

const getDiagramUrl = (id) => `https://api.diagramart.com/v1/ed/getDiagram/${id}`;

const LoadingPanels = () => (
  <Tabs>
    <TabList>
      {['Info', 'Description', 'Methods', 'Usage', 'Market'].map(title => <Tab key={title}>{title}</Tab>)}
    </TabList>

    <TabPanel><Loader /></TabPanel>
    <TabPanel><Loader /></TabPanel>
    <TabPanel><Loader /></TabPanel>
    <TabPanel><Loader /></TabPanel>
    <TabPanel><Loader /></TabPanel>
  </Tabs>
);

const Panels = ({diagram}) => (
  <Tabs>
    <TabList>
      {['Info', 'Description', 'Methods', 'Usage', 'Market'].map(title => <Tab key={title}>{title}</Tab>)}
    </TabList>

    <TabPanel>
      <p><b>Credits:</b></p>
      <p><b>Attributes:</b></p>
      <p><b>Product ID:</b> {diagram.id}</p>
      <p><b>Author:</b> {diagram.vendor}</p>
      <p><b>Language:</b></p>
      <p><b>Product type:</b> {diagram.product_type}</p>
      <p><b>Collection:</b></p>
      <p><b>License:</b></p>
    </TabPanel>
    <TabPanel>{diagram.body_html}</TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
    <TabPanel></TabPanel>
  </Tabs>
);

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      imageLoading: true,
      diagram: {},
    };
  }

  componentDidMount() {
    fetch(getDiagramUrl(this.props.id))
      .then((response) => {
        return response.json();
      })
      .then((obj) => {
        this.setState({diagram: obj.product, loading: false}, () => {
          let image = new Image();
          image.onload = () => {
            this.setState({imageLoading: false});
          };
          image.src = this.state.diagram.image.src;
        });
      });
  }

  render() {
    return (
      <div className="da-detail">
        <h1 className="text-center">{this.state.loading ? "" : this.state.diagram.title}</h1>
        <div className="da-col text-center">
          <div className="da-picture bordered">
            {this.state.imageLoading && <Loader />}
            {!this.state.imageLoading && <img src={this.state.diagram.image.src} alt={this.state.diagram.title} />}
          </div>
        </div>
        <div className="da-col">
          {this.state.loading ? <LoadingPanels /> : <Panels diagram={this.state.diagram} />}
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  id: PropTypes.number.isRequired,
}

export default Detail;
