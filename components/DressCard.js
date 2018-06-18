import SaleBadge from '../components/SaleBadge';
import "../static/dress-card.sass";

const DressCard = (props) => (
    <React.Fragment>
        <div className="dress-container">
            <SaleBadge onSale={props.onSale} />
            <div className="dress-card" onClick={props.onClick}>
            <img src={props.bg} />
            <span className="dress-overlay"></span>
            <div className="dress-info">
                <h2>{props.name}</h2>
                <span
                    className={(`subtext sale-info ${props.onSale ? 'is-showing' : 'null'}`)}>
                    {/* Colour: {props.colour} */}
                    <span>{props.size}, {props.price} <strong>{props.salePrice}</strong></span>
                </span>
            </div>

        <style jsx>{`
            .dress-card {
                background: url('${'test'}');
                background-position: top center;
                background-size: cover; 
            }
        `}</style>
        </div>
        </div>
    </React.Fragment>
)

export default DressCard;