import React from 'react';
import Navigation from '../components/Navigation';
import BookAppointment from '../components/BookAppointment';
import Footer from '../components/Footer';
import "../static/style.sass"

class Layout extends React.Component {

    render(){
        return(
            <div>
                <BookAppointment
                    modalIsOpen={this.props.modalOpen}
                    closeModal={this.props.modalClose}
                />
                <div className="nav-container"></div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout