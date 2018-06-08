import React from "react";
import "../static/sale-badge.sass";


class SaleBadge extends React.Component {
  render() {

    return (
          <div className={(`sale-badge ${this.props.onSale ? 'is-showing' : 'null'}`)}>
                <h4>Sale</h4>
          </div>
    );
  }
}

export default SaleBadge