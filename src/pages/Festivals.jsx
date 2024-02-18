import { Link } from "react-router-dom"
// import dataFestivals from "./../../../Project-react-server/db.json"
import dataFestivals from './../../../project2_server/db.json'
import './../App.css'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const festivalsArr = dataFestivals.festivals


const Festivals = () => {

    return (
        <Container>
            <Card body className="mt-2">

                <h1>Festivals</h1>



                <Row xs={1} md={2} className="g-4">

                    {festivalsArr.map((festival) => (
                        <Link to={`/festivals/${festival.id}`}>
                            <Col key={festival.id}>
                                <Card>
                                    <Card.Img variant="top" src={festival.source.image} />
                                    <Card.Body>
                                        <Card.Title>{festival.name}</Card.Title>
                                        <Card.Text>{festival.shortDescription}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Link>
                    ))}

                </Row>
            </Card>
        </Container >


    )

}

export default Festivals