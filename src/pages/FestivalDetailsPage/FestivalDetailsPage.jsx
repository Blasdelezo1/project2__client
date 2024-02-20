import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Card, Image, Spinner, ListGroup } from "react-bootstrap"

import EditionCard from '../../components/EditionCard/EditionCard'

import axios from 'axios'

const API_BASE_URL = 'http://localhost:5005'

const FestivalDetailsPage = () => {

    const [festival, setFestival] = useState({})
    const [editions, setEditions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { festivalId } = useParams()

    useEffect(() => loadFestivalDetails(), [])
    useEffect(() => loadEditions(), [])

    const loadFestivalDetails = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${festivalId}?_embed=festivals`)
            .then(({ data }) => {
                setFestival(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions?_embed=editions`)
            .then(({ data }) => {
                setEditions(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }


    return (

        isLoading
            ?
            <Spinner animation="grow" />
            :
            <Container className="FestivalDetails">

                <Row>
                    <Col md={6}>
                        <Image className="imgFestDetails" src={festival.logo} />
                    </Col>
                    <Col className="festivalName">
                        <h1>{festival.name}</h1>
                    </Col>
                </Row>

                <Card body>{festival.description}</Card>

                <Row>
                    <Col md={3}>
                        <ListGroup>
                            <ListGroup.Item><strong>Music Genres</strong></ListGroup.Item>
                            {
                                festival.genres.map((genre) => {
                                    return (
                                        <ListGroup.Item key={genre}>
                                            {genre}
                                        </ListGroup.Item>
                                    )
                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>

                <Row>
                    <Col md={6}>
                        <ListGroup horizontal>
                            {
                                editions.map((edition) => {
                                    if (edition.festivalId === festival.id) {
                                        return (
                                            <ListGroup.Item key={edition.id}>
                                                {<EditionCard {...edition} />}
                                            </ListGroup.Item>
                                        )
                                    }

                                })
                            }
                        </ListGroup>
                    </Col>
                </Row>


            </Container >

    )

}

export default FestivalDetailsPage