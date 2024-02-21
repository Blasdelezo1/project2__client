import { Card } from "react-bootstrap"

import './TicketsCard.css'

const TicketsCard = ({ type, price }) => {

    return (
        <Card.Body className="TicketsCard">
            <Card.Text className="typeTicketCard">Type: <strong> {type}</strong></Card.Text>
            <Card.Text className="priceTicketCard">Price: <strong>{price}€</strong></Card.Text>
        </Card.Body>
    )

}

export default TicketsCard