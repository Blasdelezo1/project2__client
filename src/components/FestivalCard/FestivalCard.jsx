import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const FestivalCard = ({ id, source, name, shortDescription }) => {

    const imageSrc = source?.image || 'https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg'

    return (
        <Link to={`/festivals/${id}`}>
            <Card>
                <Card.Img variant="top" src={imageSrc} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default FestivalCard 