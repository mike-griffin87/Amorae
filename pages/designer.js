import React from 'react';
import Data from '../static/data/data-navigation';
import DressCard from '../components/DressCard';
import SimpleSlider from '../components/SimpleSlider';
import Layout from '../components/Layout';

class Designer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            blurb: '',
            sale: false,
            dresses: {}
        }
    }
        componentWillMount() {
            Data.map((designer) => {
            if (designer.title === this.props.url.query.designer){
                this.setState({
                    title: designer.title,
                    blurb: designer.blurb,
                    sale: designer.sale,
                    dresses: designer.dresses
                });
            }
            });
        }

    render() {
      return (
          <Layout url={this.props.url} theme="dark">
            <div className="main-body page-vs-nav">
                <h1 className="tab">{this.state.title}</h1>
                <p>{this.state.blurb}</p>
                {this.state.dresses.map((d, id) => 
                    <DressCard
                        key={id}
                        onSale={d.sale}
                        bg={d.images[0].path}
                        name={d.name}
                        colour={d.colour}
                        size={d.size}
                        price={d.price}
                    />
                )}
            </div>
          </Layout>
      );
    }
  }
  
  export default Designer;