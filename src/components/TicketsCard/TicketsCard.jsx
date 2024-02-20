import { Card } from "react-bootstrap"

import './TicketsCard.css'

const TicketsCard = ({ type, price }) => {

    return (
        <Card.Body key={price} className="TicketsCard">
            <Card.Text className="type">Type: {type}</Card.Text>
            <Card.Text className="priceTicketCard">Price: <strong>{price}€</strong></Card.Text>
        </Card.Body>
    )

}

export default TicketsCard