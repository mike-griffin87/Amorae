import React from 'react';
import Link from 'next/link'
import navData from '../static/data/data-navigation';
import "../static/navigation.sass";



class Navigation extends React.Component {
    
    constructor() {
        super();

        this.state = {
            active: false,
            navDropdown: false
        }
    }

    handleNav() {
        this.setState({ active: !this.state.active });
    }

    handleDropdown() {
        this.setState({ navDropdown: !this.state.navDropdown});
    }
    
    render(){
        if (typeof window !== 'undefined') {
            this.state.active == true ? document.body.style.overflowY = "hidden" : document.body.style.overflowY= "scroll";
        }

        const classes = this.props.isOpen ? 'is-open' : 'null';
        
        return(
            <div>
                <div
                    className={`${classes} overlay`}
                    onClick={this.props.closeModal}>
                </div>
                <div onClick={() => this.handleNav()} className="hamburger">
                    <span className={(`${this.state.active ? 'is-open' : 'null'} top`)}></span>
                    <span className={(`${this.state.active ? 'is-open' : 'null'} middle`)}></span>
                    <span className={(`${this.state.active ? 'is-open' : 'null'} bottom`)}></span>
                </div>
                <div className={(`${this.state.active ? 'is-open' : 'null'} nav-panel`)}>
                    <nav>
                    <ul>
                        <Link href="homepage">
                            <li><h2>Home</h2></li>
                        </Link>
                        <li onClick={() => this.handleDropdown()} className={(`${this.state.navDropdown ? 'is-open' : 'null'} dropdown`)}>
                            <h2>Our Designers</h2>
                            <ul className={this.state.navDropdown ? 'is-open' : 'null'}>
                                {navData.map((d, i) => <Link href={d.link}><li key={i}>
                                    <h2>{d.navTitle}</h2>
                                    <span>{d.navTagLine}</span>
                                </li></Link>)}
                            </ul>
                        </li>
                        <li>
                            <h2>Sample Sale</h2>
                            {/* <span>Learn more about Amorae Bridal</span> */}
                        </li>
                        <li>
                            <h2>Book an Appointment</h2>
                            {/* <span>Learn more about Amorae Bridal</span> */}
                        </li>
                        <li>
                            <h2>Contact us</h2>
                            {/* <span>Learn more about Amorae Bridal</span> */}
                        </li>
                    </ul>
                    </nav>
                </div>
            </div>
        )
    }
}



export default Navigation