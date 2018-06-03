import React from 'react';
import Navigation from '../components/Navigation';
import BookAppointment from '../components/BookAppointment';
import Footer from '../components/Footer';
import "../static/style.sass"

class Layout extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         appointment: false
    //     }
    // }

    render(){
        return(
            <div>
                <BookAppointment active={this.props.appointment} />
                <div className="nav-container"></div>
                <Navigation />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout