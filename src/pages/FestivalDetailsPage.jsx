import './../App.css'

import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

import axios from 'axios'

const API_BASE_URL = 'http://localhost:5005'

const FestivalDetailsPage = () => {

    const [festival, setFestival] = useState([])
    const { festivalId } = useParams()

    useEffect(() => loadFestivalDetails(), [])

    const loadFestivalDetails = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${festivalId}?_embed=tasks`)
            .then(({ data }) => setFestival(data))
            .catch(err => console.log(err))
    }

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


            {/* NO FUNCIONA - MOSTRAR GENEROS
            <Row>
                <Col>
                    {
                        festival.genres.map((genre) => {
                            <Card body>{genre}</Card>
                        })
                    }
                </Col>
            </Row> */}

            {/* <Card body className="mt-2">
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
            </Card> */}


            {/* MAPA */}

        </Container >

    )

}

export default FestivalDetailsPage