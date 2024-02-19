import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

const EdtionCard = ({ id, sources }) => {

    return (
        <Link to={`/editions/${id}`}>
            <Col key={edition.id}>
                <Card >
                    <Card.Img variant="top" src={sources.cover} />
                    <Card.Body>
                        <Card.Title>Título?</Card.Title>
                        <Card.Text>???</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Link>
    )
}

export default EdtionCard