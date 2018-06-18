import Link from 'next/link';
import "../static/designer-card.sass";

const DesignerCard = (props) => (

    <div className="designer-card">
        <Link
            as={`${props.title.split(' ').join('').toLowerCase()}`}
            href={`/designer?designer=${props.title}`}>
            <div className="designer-info">
                <div className="text">
                    <h3>{props.title}</h3>
                    <span className="subtext">{props.dresses}</span>
                </div>
                <div className="icon"><h1 className="fa fa-arrow-right"></h1></div>
            </div>
        </Link>


    <style jsx>{`
        .designer-card {
            background: url('${props.bg}');
            background-position: center center;
            background-size: cover; 
        }
    `}</style>

    </div>
)

export default DesignerCard