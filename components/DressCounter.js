import React from 'react';
import Data from '../static/data/data-navigation';

class DressCounter extends React.Component {
  constructor(){
    super();
    this.state = {
      dresses: 0,
      saleDresses: 0,
      text: 'Dresses',
      saleText: 'Sale Dresses'
    }
  }

  sale = (id) => {
    let saleDresses = [];
      for(let i=0; i < Data[id].dresses.length; i++) {
        saleDresses.push(Data[id].dresses[i].sale)
      }
      let saleFiltered = saleDresses.filter(dress => dress == true);
      this.setState({saleDresses: saleFiltered.length});
  }

  componentWillMount() {
    let dressCount = Data[this.props.id].dresses.length;
    dressCount == 1 ? this.setState({text: 'dress'}) : this.setState({text: 'dresses'});
    this.setState({dresses: dressCount});
    // console.log(() => this.sale(2));
    () => this.sale(this.props.id) == 1 ? this.setState({saleText: 'Sale Dress'}) : this.setState({text: 'Sale Dresses'});
    return this.sale(this.props.id)
  }

  render(){
    
      return(
        <span className="sub-text">{this.state.dresses} {this.state.text} | {this.state.saleDresses} {this.state.saleText}</span>
      )
  }
}

export default DressCounter
