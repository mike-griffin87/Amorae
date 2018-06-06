import React from 'react';
import Data from '../static/data/data-navigation';

class DressCounter extends React.Component {
  constructor(){
    super();
    this.state = {
      dresses: 0,
      text: 'Dresses'
    }
  }

  componentWillMount(){
    let dressCount = Data[this.props.id].dresses.length;
    dressCount == 1 ? this.setState({text: 'dress'}) : this.setState({text: 'dresses'});
    this.setState({dresses: dressCount})
  }

  render(){
    
      return(
        <span className="sub-text">{this.state.dresses} {this.state.text}</span>
      )
  }
}

export default DressCounter
