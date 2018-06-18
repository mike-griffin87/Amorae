import React from 'react';
import "../static/dropdown-button.sass";

class DropdownButton extends React.Component {
    constructor() {
        super();
        this.state = {
            showing: false
        }
    }

    handleClick() {
        this.setState({ showing: !this.state.showing })
    }

    render() {
      return (
        <button
            className={this.props.btnClass}
            onClick={() => this.handleClick()}
        >
            {this.props.btnText}
            <span className={(`${this.props.btnIcon} btn-icon`)}></span>
            <ul
                className={(`${this.state.showing ? 'is-showing' : 'null'} sort-dropdown`)}>
                <li onClick={this.props.sizeClick}>sort by size</li>
                <li onClick={this.props.priceClick}>sort by price</li>
                <li onClick={this.props.nameClick}>sort by name</li>
            </ul>
        </button>
      );
    }
  }
  
  export default DropdownButton;