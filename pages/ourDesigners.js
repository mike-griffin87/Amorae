import React from 'react';
import Layout from '../components/Layout';
import DesignerCard from '../components/DesignerCard';
import Data from '../static/data/data-navigation';

class ourDesigners extends React.Component {

  sale = (id) => {
    let saleDresses = [];
      for(let i=0; i < Data[id].dresses.length; i++) {
        saleDresses.push(Data[id].dresses[i].sale)
      }
      let saleFiltered = saleDresses.filter(dress => dress == true);
      return saleFiltered.length;
  }

  render(){
      return(
        <Layout theme="dark">
        <div className="main-body page-vs-nav">
          <h1 className="tab">Our Designers</h1>
          <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec sed odio dui.</p>
  
          <div className="designer-container">
            {Data.map((d, id) => <DesignerCard
              key={id}
              title={d.title}
              dresses={(
                `${d.dresses.length === 1 ? d.dresses.length + ' Dress' : d.dresses.length + ' Dresses'} | 
                ${this.sale(id) === 1 ? this.sale(id) + ' Sale Dress' :  this.sale(id) + ' Sale Dresses'}`)}
              link={d.link}
              bg={d.bg}
            />)}
          </div>
  
        </div>
      </Layout>
      )
  }
}

export default ourDesigners
