import { Link, useParams } from "react-router-dom"
import dataFestivals from "./../../../Project-react-server/db.json"
import './../App.css'
import { Container, Row, Col, Card, Image } from "react-bootstrap"

const festivalsArr = dataFestivals.festivals
const editionsArr = dataFestivals.editions

const FestivalDetails = () => {

    const { festivalId } = useParams()

    const festival = festivalsArr.find(festival => festival.id === parseInt(festivalId))

    return (

        < Container className="FestivalDetails">

            <Row>
                <Col>
                    <Image className="imgFestDetails" src={festival.logo} />
                </Col>
                <Col className="festivalName">
                    <h1>{festival.name}</h1>
                </Col>
            </Row>

            <Card body>{festival.description}</Card>


            {/*NO FUNCIONA - MOSTRAR GENEROS*/}
            <Row>
                <Col>
                    {
                        festival.genres.map((genre) => {
                            <Card body>{genre}</Card>
                        })
                    }
                </Col>
            </Row>

            <Card body className="mt-2">
                <Row xs={1} md={3} className="g-4">

                    {editionsArr.map((edition) => (
                        <Link to={`/editions/${edition.id}`}>
                            <Col key={edition.id}>
                                <Card>
                                    <Card.Img variant="top" src={edition.sources.cover} />
                                    <Card.Body>
                                        <Card.Title>{edition.year}</Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Link>
                    ))}

                </Row>
            </Card>


            {/* MAPA */}

        </Container >

    )

}

export default FestivalDetails