import React from 'react';
import Settings from '../constants/Settings.js';
import DiagramListActions from '../actions/DiagramListActions.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Paginator extends React.Component {
    static propTypes = {
        page: React.PropTypes.number,
        total: React.PropTypes.number,
        query: React.PropTypes.string
    };

    constructor(props) {
        super(props);
        this.loadPage = this.loadPage.bind(this);
    }

    loadPage(page) {
        DiagramListActions.loadLibrary(this.props.query, page, 10);
    }

    render() {
        var pages = [];

        if( this.props.page > 1 ) {
            pages.push(<li key="first"><a role="button" onClick={this.loadPage.bind(this, 1)}>{Settings.language.first}</a></li>);
        }

        if( this.props.page - 1 > 1 ) {
            pages.push(<li key={this.props.page - 1}><a role="button" onClick={this.loadPage.bind(this, parseInt(this.props.page) - 1)}>{parseInt(this.props.page) - 1}</a></li>);
        }

        pages.push(<li key={this.props.page}><a className="active" role="button">{this.props.page}</a></li>);

        if( this.props.page + 1 < this.props.total ) {
            pages.push(<li key={this.props.page + 1}><a role="button" onClick={this.loadPage.bind(this, parseInt(this.props.page) + 1)}>{parseInt(this.props.page) + 1}</a></li>);
        }

        if( this.props.page < this.props.total ) {
            pages.push(<li key="last"><a role="button" onClick={this.loadPage.bind(this, parseInt(this.props.total))}>{Settings.language.last}</a></li>);
        }

        return (
            <ul>
                {pages}
            </ul>
        );
    }
}

export default Paginator;
