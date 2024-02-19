import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const EditionCard = ({ id, festivalId, year, sources }) => {

    return (
        <Link to={`/editions/${id}`}>
            <Card >
                <Card.Img variant="top" src={sources.cover} />
                <Card.Body>
                    <Card.Title>{year}</Card.Title>
                    <Card.Text>{festivalId}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default EditionCard