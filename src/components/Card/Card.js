import ItemCount from "./ItemCount";
import './Card.css';

const Card = ({titulo, precio, stock, initial}) => {
    return (
        <div className="card-item">
            <div>
                <img src="../image.jpg" width={150}></img>
            </div>
            <p>{titulo}</p>
            <span>$ {precio}</span>
            <ItemCount stock={stock} initial={initial}/>
        </div>
    )
}

export default Card;