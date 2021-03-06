import React from 'react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import "../static/homepage.sass";



class Homepage extends React.Component {
    constructor(){
        super();
        this.state = {
            active: false
        }
    }

    handleModal() {
        this.setState({ active: !this.state.active });
    }

    render(){
        return (
            <Layout modalOpen={this.state.active} modalClose={() => this.handleModal()}>
                <div className="hero">
                    <span className="hero-wave">
                    <img src="../static/images/hero-wave.svg" />
                    </span>
                </div>
                <Button
                link="/ourCollection"
                btnClass="primary hero-cta"
                btnText="Our Collection"
                btnIcon="fa fa-arrow-right icon"/>
                <section className="main-body">
                    <h2 className="tab">About Amorae</h2>
                    <div className="img-container">
                        <img src="../static/images/amorae-shop.jpg"/>
                    </div>
                    <i>We're an award winning bridal shop in Essex.</i>

                    <p>We are located in the historic market town of Ongar, Essex. Approximately 6 miles North of Brentwood, 9 miles to the West of Chelmsford and 7 miles East of Harlow, with transport links via the A414 and the M11.</p>

                    <p>From the moment you step into Amorae you can expect a warm welcome from our friendly, experienced staff. We offer a one-to-one service so the bride can have the privacy of the shop to herself to choose the most important dress she will ever wear. From the simple and elegant to the contemporary and those with the added wow factor, our extensive selection of dresses have been carefully chosen from the industries top designers.</p>

                    <p>You are welcome to browse at any time. If you want to try on gowns please <a onClick={() => this.handleModal()}>let us know</a>, so we can guarantee that you are given our full attention; we really wouldn't want it any other way!</p>

                    <p>Look forward to meeting you soon</p>

                    <p>Emmalee, Maria & Janis
                    Amorae</p>
                </section>
             </Layout>
            )
        }
    }



export default Homepage