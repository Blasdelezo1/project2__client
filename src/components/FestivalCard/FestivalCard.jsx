import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const FestivalCard = ({ id, source, name, shortDescription }) => {

    return (
        <Link to={`/festivals/${id}`}>
            <Card>
                <Card.Img variant="top" src={source.image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default FestivalCard 