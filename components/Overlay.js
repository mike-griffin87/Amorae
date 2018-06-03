import "../static/overlay.sass";

class Overlay extends React.Component {
    render(){
        return(
            <div
                onClick={this.props.onClick}
                className={(`overlay ${this.props.coverNav ? 'cover-nav':'null'} ${this.props.overlay ? 'is-open' :'null'}`)}>
            </div>
        )
    }
}

export default Overlay