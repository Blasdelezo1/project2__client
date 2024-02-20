import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

import './FestivalCard.css'

const FestivalCard = ({ id, source, name, shortDescription }) => {

    const imageSrc = source?.image || 'https://img.freepik.com/free-vector/abstract-coming-soon-halftone-style-background-design_1017-27282.jpg'

    return (
        <Link to={`/festivals/${id}`} className="FestivalCardLink">
            <Card className="FestivalCard" >
                <div className="imgContainerFestivalCard">
                    <Card.Img variant="top" src={imageSrc} />
                </div>
                <Card.Body className="infoContainerFestivalCard">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{shortDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default FestivalCard 