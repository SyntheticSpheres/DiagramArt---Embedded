import React from 'react';
import Settings from '../constants/Settings.js';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Paginator extends React.Component {
    static propTypes = {
        page: React.PropTypes.number,
        total: React.PropTypes.number
    };

    constructor(props) {
        super(props);
    }

    render() {
        var pages = [];

        if( this.props.page > 1 ) {
            pages.push(<li key="first"><a role="button">{Settings.language.first}</a></li>);
        }

        if( this.props.page - 1 > 1 ) {
            pages.push(<li key={this.props.page - 1}><a role="button">{parseInt(this.props.page) - 1}</a></li>);
        }

        pages.push(<li key={this.props.page}><a className="active" role="button">{this.props.page}</a></li>);

        if( this.props.page + 1 < this.props.total ) {
            pages.push(<li key={this.props.page + 1}><a role="button">{parseInt(this.props.page) + 1}</a></li>);
        }

        if( this.props.page < this.props.total ) {
            pages.push(<li key="last"><a role="button">{Settings.language.last}</a></li>);
        }

        return (
            <ul>
                {pages}
            </ul>
        );
    }
}

export default Paginator;
