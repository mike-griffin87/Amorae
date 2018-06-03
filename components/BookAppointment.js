import React from 'react';
import "../static/booking.sass";
import Button from '../components/Button';

class BookAppointment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            number: "",
            email: "",
            wedding: "",
            message: ""
        }

    }

    render(){

        const classes = this.props.modalIsOpen ? 'is-open' : 'null';

        return(
            <div>
                <div
                    className={`${classes} overlay`}
                    onClick={this.props.closeModal}>
                </div>
                <div className={`${classes} booking-card`}>
                    <div className="text-content">
                        <h2>Book an Appointment</h2>
                        <p>Book your appointment using the contact form below or call us on <a href="tel: +441277366436">+44 1277 366 436</a>.</p>
                    </div>
                    <form>
                        <input
                        placeholder="Your Name"
                        value={this.state.name}
                        onChange={e => this.setState({name: e.target.value})} />

                        <input
                        placeholder="Your Contact Number"
                        value={this.state.number}
                        onChange={e => this.setState({number: e.target.value})} />

                        <input
                        placeholder="Your Email"
                        value={this.state.email}
                        type="email"
                        onChange={e => this.setState({email: e.target.value})} /> 

                        <input
                        placeholder="Your Wedding Date"
                        value={this.state.wedding}
                        //type="Date"
                        onChange={e => this.setState({wedding: e.target.value})} /> 

                        <textarea
                        placeholder="Message / Comments"
                        value={this.state.message}
                        onChange={e => this.setState({message: e.target.value})}></textarea> 
                    </form>
                    <div className="form-controls">
                        <Button btnClass="secondary no-icon" btnText="Cancel" />
                        <Button btnClass="primary no-icon" btnText="Send" />
                    </div>
                </div>
            </div>
        )
    }
}



export default BookAppointment