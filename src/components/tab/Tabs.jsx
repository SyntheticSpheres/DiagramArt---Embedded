import React from 'react';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: this.props.selected
        }
    }

    handleClick(index, event) {
        event.preventDefault();
        this.setState({
            selected: index
        });
    }

    shouldComponentUpdate(nextProps, nextState) {
  	     return this.props !== nextProps || this.state !== nextState;
     }

    renderTitles() {
        function labels(child, index) {
          let activeClass = (this.state.selected === index ? 'active' : '');
          return (
            <li key={index}>
              <a href="#"
                className={activeClass}
                onClick={this.handleClick.bind(this, index)}>
                {child.props.label}
              </a>
            </li>
          );
        }
        return (
          <ul>
            {this.props.children.map(labels.bind(this))}
          </ul>
        );
    }

    renderContent() {
        return (
            <div className="da-detail-tab-content">
                {this.props.children[this.state.selected]}
            </div>
        );
    }

    render() {
        var className = null;
        if(this.props.className !== undefined){
            className = this.props.className
        }
        return (
            <div className={className}>
                {this.renderTitles()}
                {this.renderContent()}
            </div>
        )
    }
}

export default Tabs;
