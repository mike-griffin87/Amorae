import React from 'react';
import Data from '../static/data/data-navigation';
import DressCard from '../components/DressCard';
import Layout from '../components/Layout';
import DropdownButton from '../components/DropdownButton';

class SampleSale extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            saleDresses: [],
            btnText: 'Sort dresses'
        }
    }
        componentWillMount() {
            let filteredSaleDresses = [];
            Data.map((designer, id) => {
                designer.dresses.filter((saleDress) => {
                    if (saleDress.sale === true){
                        filteredSaleDresses.push(saleDress);
                    }
                    
                })
            })
            this.setState({ saleDresses: filteredSaleDresses});
        }

        handleSizeClick() {
            let sortedDresses = this.state.saleDresses.sort(function(a,b) {return (a.size > b.size) ? 1 : ((b.size > a.size) ? -1 : 0);} );
            this.setState({
                saleDresses: sortedDresses,
                btnText: "Dresses Sorted by Size"
            })
        }

        handlePriceClick() {
            let sortedDresses = this.state.saleDresses.sort(function(a,b) {return (a.salePrice > b.salePrice) ? 1 : ((b.salePrice > a.salePrice) ? -1 : 0);} );
            this.setState({
                saleDresses: sortedDresses,
                btnText: "Dresses Sorted by Price"
            })
        }

        handleNameClick() {
            let sortedDresses = this.state.saleDresses.sort(function(a,b) {return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);} );
            this.setState({
                saleDresses: sortedDresses,
                btnText: "Dresses Sorted by Name"
            })
        }

    render() {
      return (
          <Layout theme="dark">
            <div className="top-content page-vs-nav">
                <h1 className="tab">Sample Sale</h1>
                <p>We edit our dress range regularly and we are constantly taking deliveries of new styles so we like to discount our stunning dresses. A sample gown may be the answer if you want a designer dress to fit your budget.</p>
                <DropdownButton
                    btnClass="dropdown-btn"
                    btnText={this.state.btnText}
                    btnIcon="icon fa fa-caret-down"
                    sizeClick={() => this.handleSizeClick()}
                    priceClick={() => this.handlePriceClick()}
                    nameClick={() => this.handleNameClick()}
                />
            </div>
            <div className="main-body">
                {this.state.saleDresses.map((d, id) => 
                    <DressCard
                        key={id}
                        onSale={d.sale}
                        bg={d.images[0].path}
                        name={d.name}
                        colour={d.colour}
                        size={d.size}
                        price={d.price}
                        salePrice={d.salePrice}
                    />
                )}
            </div>
          </Layout>
      );
    }
  }
  
  export default SampleSale;