import React from 'react';

/**
 *
 * @author Matej 'juffalow' Jellus <juffalow@juffalow.com>
 */
class Paginator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var pages = [];

        if( this.props.page > 1 ) {
            pages.push(<li key="first">First</li>);
        }

        pages.push(<li key={this.props.page}><a role="button">{this.props.page}</a></li>);

        if( this.props.page < this.props.total ) {
            pages.push(<li key="last"><a role="button">Last</a></li>);
        }

        return (
            <ul>
                {pages}
            </ul>
        );
    }
}

export default Paginator;
