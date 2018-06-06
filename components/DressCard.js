import "../static/dress-card.sass";

const DressCard = (props) => (
    <div className="dress-card">
        
        <img src={props.bg} />
        <span className="dress-cover" ></span>
        <div className="dress-info">
            <h2>{props.name}</h2>
        </div>

    <style jsx>{`
        .dress-card {
            background: url('${'test'}');
            background-position: top center;
            background-size: cover; 
        }
    `}</style>
    </div>
)

export default DressCard;