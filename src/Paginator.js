import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Paginator.css';

const Page = ({page, onClick, active}) => ( <li className={active && "active"}><a role="button" onClick={onClick}>{page}</a></li> );

class Paginator extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(page) {
    this.props.onPageChange(page);
  }

  render() {
    const pages = [];

    // first page
    this.props.page > 1 && pages.push(<Page key={1} page={1} onClick={this.onClick.bind(this, 1)} />);
    // page previous page
    this.props.page - 1 > 1 && pages.push(<Page key={this.props.page - 1} page={this.props.page - 1} onClick={this.onClick.bind(this, this.props.page - 1)} />);
    // actual page
    pages.push(<Page key={this.props.page} page={this.props.page} onClick={this.onClick.bind(this, this.props.page)} active={true} />);
    // next page
    this.props.page + 1 < this.props.pages && pages.push(<Page key={this.props.page + 1} page={this.props.page + 1} onClick={this.onClick.bind(this, this.props.page + 1)} />);
    // last page
    this.props.page < this.props.pages && pages.push(<Page key={this.props.pages} page={this.props.pages} onClick={this.onClick.bind(this, this.props.pages)} />);

    return (
      <ul>
        {pages}
      </ul>
    );
  }
}

Paginator.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Paginator;
