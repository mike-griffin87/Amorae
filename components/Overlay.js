import "../static/overlay.sass";


class Overlay extends React.Component {
    render(){
        return(
            <div onClick={this.props.onClick} className={(`${this.props.isOpen} overlay`)}></div>
        )
    }
}

export default Overlay