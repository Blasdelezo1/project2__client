import './../App.css'

import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const API_BASE_URL = 'http://localhost:5005'


const FestivalsPage = () => {

    // TODO: CONECTAR REACT A LA API

    const [festivals, setFestivals] = useState([])

    useEffect(() => loadFestivals(), [])

    const loadFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals?_embed=tasks`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <Card body className="mt-2">

                <h1>Festivals</h1>



                <Row xs={1} md={2} className="g-4">

                    {festivals.map((festival) => (
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

export default FestivalsPage