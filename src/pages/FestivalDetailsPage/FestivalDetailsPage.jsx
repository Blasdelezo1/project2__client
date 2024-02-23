import { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from "react-router-dom"
import { Container, Row, Col, Card, Image, Spinner, ListGroup, Button } from "react-bootstrap"

import EditionCard from '../../components/EditionCard/EditionCard'

import axios from 'axios'
import './FestivalDetailsPage.css'

const API_BASE_URL = "https://bestfest-server.fly.dev"

const FestivalDetailsPage = () => {

    const [festival, setFestival] = useState({})
    const [editions, setEditions] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const { festivalId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        loadFestivalDetails()
        loadEditions()
    }, [])

    const loadFestivalDetails = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${festivalId}`)
            .then(({ data }) => {
                setFestival(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions?festivalId=${festivalId}`)
            .then(({ data }) => {
                setEditions(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteFestival = () => {
        axios
            .delete(`${API_BASE_URL}/festivals/${festivalId}`)
            .then(() => navigate('/festivals'))
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
                                <Image src={festival.logo} />
                            </Col>
                            <Col className='festivalNameContent' md={8}>
                                <h1>{festival.name}</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Card body className='descriptionFestivalDetails'>{festival.description}</Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <ListGroup horizontal className='editionCardContainerFestivalDetailsPage'>
                                    {
                                        editions?.map((edition) => {
                                            return (
                                                <ListGroup.Item key={edition.id} className="editionCardFestivalDetailsPage">
                                                    <EditionCard {...edition} />
                                                </ListGroup.Item>
                                            )
                                        })
                                    }
                                </ListGroup>
                            </Col>
                        </Row>
                    </Col>
                    <Col md={3}>
                        <div className="genresList">
                            <h4 className="titleMusicGenres">Music Genres</h4>
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
                <Row>
                    <Col className='buttonContainer'>
                        <Link to={"/festivals"}>
                            <Button variant="dark">Back</Button>
                        </Link>
                        <Link to={`/festivals/${festivalId}/edit`}>
                            <Button variant="dark">Edit</Button>
                        </Link>
                        <Link to={"/create-edition"}>
                            <Button variant="dark">Add edition</Button>
                        </Link>
                        <Link to={"/festivals"}>
                            <Button onClick={deleteFestival} variant="dark">Delete</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
    )
}

export default FestivalDetailsPage