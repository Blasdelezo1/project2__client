import { Card } from "react-bootstrap"

const TicketsCard = ({ type, price }) => {

    return (
        <Card.Body key={price} className="TicketsCard">
            <Card.Title>{type}</Card.Title>
            <Card.Text>{price}</Card.Text>
        </Card.Body>
    )

}

export default TicketsCard