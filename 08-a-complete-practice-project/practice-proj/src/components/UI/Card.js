import './Card.css';
// card component that can take in styles from its parent component

function Card(props) {
    return (
        <div className = {`card ${props.className}`}>
            {props.children}
        </div>
    )
};

export default Card;