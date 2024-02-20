import { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { Container, Row, Col, Card, Image, Spinner, ListGroup, Button } from "react-bootstrap"

import EditionCard from '../../components/EditionCard/EditionCard'

import axios from 'axios'
import './FestivalDetailsPage.css'

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
            <Container className="FestivalDetailsPage">
                <Row>
                    <Col md={9}>
                        <Row>
                            <Col md={4}>
                                <Image className="imgFestDetails" src={festival.logo} />
                            </Col>
                            <Col md={8}>
                                <h1 className="festivalName">{festival.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Card body>{festival.description}</Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <ListGroup horizontal>
                                    {editions.map((edition) => {
                                        if (edition.festivalId === festival.id) {
                                            return (
                                                <ListGroup.Item key={edition.id}>
                                                    <EditionCard {...edition} />
                                                </ListGroup.Item>
                                            );
                                        }
                                    })}
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to={"/festivals"}>
                                    <Button variant="dark">Back</Button>
                                </Link>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <div className="genresList">
                            <h4 className="itemGenresList">Music Genres</h4>
                            <ListGroup>
                                {
                                    festival.genres?.map((genre) => (
                                        <ListGroup.Item key={genre} className="itemGenresList">
                                            {genre}
                                        </ListGroup.Item>
                                    ))
                                }
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default FestivalDetailsPage