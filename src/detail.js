import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ImageLoader from './ImageLoader';
import Loader from './Loader';
import './Detail.css';

import withDiagramData from './hoc/withDiagramData';

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
  render() {
    const isLoading = Object.keys(this.props.diagram).length === 0;
    const imageSrc = this.props.diagram.hasOwnProperty('image') ? this.props.diagram.image.src : '';

    return (
      <div className="da-detail">
        <h1 className="text-center">{isLoading ? "" : this.props.diagram.title}</h1>
        <div className="da-col text-center">
          <div className="da-picture bordered">
            <ImageLoader image={imageSrc} />
          </div>
        </div>
        <div className="da-col">
          { isLoading ? <LoadingPanels /> : <Panels diagram={this.props.diagram} /> }
        </div>
      </div>
    );
  }
}

Detail.propTypes = {
  diagram: PropTypes.object.isRequired,
}

export default withDiagramData(Detail);
