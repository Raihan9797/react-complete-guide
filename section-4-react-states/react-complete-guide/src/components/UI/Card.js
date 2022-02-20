import "./Card.css";

function Card(props) {
    const cardStyle = 'card ' + props.className;
    return (
    <div className = {cardStyle}>
        {props.children}
    </div>
    )

}

export default Card;