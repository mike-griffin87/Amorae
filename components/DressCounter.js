import Data from '../static/data/data-navigation';

sale = (id) => {
    let saleDresses = [];
      for(let i=0; i < Data[id].dresses.length; i++) {
        saleDresses.push(Data[id].dresses[i].sale)
      }
      let saleFiltered = saleDresses.filter(dress => dress == true);
      return saleFiltered.length;
  }

const DressCounter = () => (
    sale(0)
)

export default DressCounter