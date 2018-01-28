import React, { Component } from 'react';
import 'whatwg-fetch';
import Menu from './Menu';
import ThumbnailList from './ThumbnailList';
import Paginator from './Paginator';
import ShadowBox from './ShadowBox';
import Detail from './Detail';
import './DefaultFont.css';
import './Library.css';

const getDiagramLibraryUrl = (query, limit, page) => `https://api.diagramart.com/v1/ed/getDiagramLibrary/?limit=${limit}&page=${page}&qs=${query}`;

class Library extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      pages: 1,
      query: '',
      diagrams: [],
      detail: false,
    };

    this.onQueryChange = this.onQueryChange.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
    this.onThumbnailClick = this.onThumbnailClick.bind(this);
    this.onShadowBoxClick = this.onShadowBoxClick.bind(this);
  }

  componentDidMount() {
    this.fetchDiagrams();
  }

  onQueryChange(value) {
    this.setState({query: value}, () => {
      this.fetchDiagrams();
    });
  }

  onPageChange(page) {
    this.setState({page: page}, () => {
      this.fetchDiagrams();
    });
  }

  onThumbnailClick(id) {
    this.setState({detail: id});
  }

  onShadowBoxClick() {
    this.setState({detail: 0});
  }

  fetchDiagrams() {
    const library = this;
    fetch(getDiagramLibraryUrl(this.state.query, this.props.limit, this.state.page))
      .then(function(response) {
        return response.json();
      })
      .then(function(obj) {
        const diagrams = obj.rows.map((row) => {
          return {
            id: Number(row['PRODUCT ID']),
            title: row['PRODUCT NAME'],
            picture: row['PRODUCT PREVIEW PICTURE'],
          }
        });
        library.setState({diagrams: diagrams, pages: Math.ceil(obj.allDiagramsCount / library.props.limit) });
      });
  }

  render() {
    return (
      <div className="da-library">
        <Menu onQueryChange={this.onQueryChange} />
        <ThumbnailList diagrams={this.state.diagrams} onThumbnailClick={this.onThumbnailClick} />
        <div className="da-pagination">
          <Paginator page={this.state.page} pages={this.state.pages} onPageChange={this.onPageChange} />
        </div>
        {this.state.detail > 0 && <ShadowBox onClick={this.onShadowBoxClick}><Detail id={this.state.detail} /></ShadowBox>}
      </div>
    );
  }
}

Library.defaultProps = {
  limit: 7
};

export default Library;
