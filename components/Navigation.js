import React from 'react';
import Link from 'next/link'
import Data from '../static/data/data-navigation';
import Overlay from '../components/Overlay';
import BookAppointment from '../components/BookAppointment';
import "../static/navigation.sass";



class Navigation extends React.Component {
    
    constructor() {
        super();

        this.state = {
            active: false,
            overlay: false,
            navDropdown: false,
            appointment: false
        }
    }

    closeNav() {
        this.setState({ active: !this.state.active, overlay: !this.state.overlay });
    }

    closeOverlay() {
        this.setState({ overlay: false, active: false, appointment: false }); 
    }

    handleDropdown() {
        this.setState({ navDropdown: !this.state.navDropdown});
    }

    closeAppointment() {
        this.setState({
            overlay: !this.state.overlay,
            appointment: !this.state.appointment
        });
    }

    openAppointment(){
        this.setState({
            active: !this.state.active,
            appointment: !this.state.appointment
        });
    }

    sale = (id) => {
        let saleDresses = [];
          for(let i=0; i < Data[id].dresses.length; i++) {
            saleDresses.push(Data[id].dresses[i].sale)
          }
          let saleFiltered = saleDresses.filter(dress => dress == true);
          return saleFiltered.length;
      }
    
    render(){
        if (typeof window !== 'undefined') {
            this.state.active == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY= "scroll";
        }        
        return(
            <div>
                <BookAppointment active={this.state.appointment}/>
                <Overlay coverNav={this.state.appointment} overlay={this.state.overlay} onClick={() => this.closeOverlay()} />
                <div onClick={() => this.closeNav()} className={`hamburger`}>
                    <span className={(`${this.props.theme} ${this.state.active ? 'is-open' : 'null'} top`)}></span>
                    <span className={(`${this.props.theme} ${this.state.active ? 'is-open' : 'null'} middle`)}></span>
                    <span className={(`${this.props.theme} ${this.state.active ? 'is-open' : 'null'} bottom`)}></span>
                </div>
                <div className={(`${this.state.active ? 'is-open' : 'null'} nav-panel`)}>
                    <nav>
                    <ul>
                        <Link href="homepage">
                            <li><h2>Home</h2></li>
                        </Link>
                        <li 
                        onClick={() => this.handleDropdown()}
                        className={(`${this.state.navDropdown ? 'is-open' : 'null'} dropdown`)}>
                            <h2>Our Designers</h2>
                            <ul className={this.state.navDropdown ? 'is-open' : 'null'}>
                                {Data.map((d, id) =>
                                <Link key={id} href={d.link}><li>
                                <h2>{d.title}</h2>
                                <span className="subtext">{`
                                ${d.dresses.length === 1 ? d.dresses.length + ' Dress' : d.dresses.length + ' Dresses'} | 
                                ${this.sale(id) === 1 ? this.sale(id) + ' Sale Dress' :  this.sale(id) + ' Sale Dresses'}`}</span>
                                </li></Link>)}
                            </ul>
                        </li>
                        <li>
                            <h2>Sample Sale</h2>
                        </li>
                        <li>
                            <h2 onClick={() => this.openAppointment()}>Book an Appointment</h2>
                        </li>
                        <li>
                            <h2>Contact us</h2>
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
}



export default Navigation