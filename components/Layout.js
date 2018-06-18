import React from 'react';
import Navigation from '../components/Navigation';
import BookAppointment from '../components/BookAppointment';
import Footer from '../components/Footer';
import "../static/style.sass"

class Layout extends React.Component {

    render(){
        return(
            <div>
                <BookAppointment CancelClick={this.props.CancelClick} active={this.props.appointment} />
                <div className="nav-container">
                    <span className="logo">Amorae</span>
                </div>
                <Navigation theme={this.props.theme}/>
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout