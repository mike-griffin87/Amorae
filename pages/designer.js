import React from 'react';
import Data from '../static/data/data-navigation';
import DressCard from '../components/DressCard';
import Layout from '../components/Layout';

let d = {};
const Content = (props) => (
  Data.map((designer) => {
    if (designer.title === props.url.query.designer){
      d = designer;
    }
  }),

  <div>
    <h1 className="tab">{d.title}</h1>
    <p>{props.getCover}</p>
    <div className="dresses-container">
        <ul>
            {d.dresses.map((d, id) => <li><DressCard
                key={id}
                bg={d.images[0].path}
                name={d.name}
                
            /></li>)}
        </ul>
    </div>

  </div>
)

class Designer extends React.Component {

    render() {
      return (
          <Layout theme="dark">
            <div className="main-body page-vs-nav">
                <Content
                    url={this.props.url}
                />
            </div>
          </Layout>
      );
    }
  }
  
  export default Designer;