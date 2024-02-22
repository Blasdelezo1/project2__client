import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Spinner, Carousel, Card, ListGroup, Row, Col, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import SponsorCard from './../../components/SponsorCard/SponsorCard'
import TicketsCard from './../../components/TicketsCard/TicketsCard'

import axios from "axios"
import './EditionDetailsPage.css'

const API_BASE_URL = 'http://localhost:5005'

const EditionsDetailsPage = () => {

    const [edition, setEdition] = useState({})
    const [festival, setFestival] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { editionId } = useParams()

    useEffect(() => { loadEditionsDetails() }, [])

    useEffect(() => {
        edition.festivalId && loadFestival()
    }, [edition])

    const loadEditionsDetails = () => {
        axios
            .get(`${API_BASE_URL}/editions/${editionId}`)
            .then(({ data }) => {
                setEdition(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const loadFestival = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${edition.festivalId}`)
            .then(({ data }) => {
                setFestival(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const deleteEdition = () => {
        axios
            .delete(`${API_BASE_URL}/editions/${editionId}`)
            .then(() => navigate('/editions'))
            .catch(err => console.log(err))
    }

    return (
        isLoading
            ?
            <Spinner animation="grow" />
            :
            <Container className="EditionDetailsPage">
                {
                    edition && <h1 className="titleEditionDetails">{festival.name} edition {edition.year}</h1>
                }
                <Row className="infoEditionDetails">
                    <Col md={9}>
                        <Card.Body>
                            <p>Relive the unforgettable moments of the <strong>{edition.year}</strong> edition of the <strong>{festival.name}</strong>!</p>
                            <p>Start date: <strong>{edition.starts}</strong></p>
                            <p>End date: <strong>{edition.ends}</strong></p>
                            <p>We are pleased to reminisce and celebrate the incredible moments we shared during this unique experience. With a capacity for <strong>{edition.capacity}</strong> enthusiasts, we are grateful for the energy and passion that each of you brought to the festival.</p>
                            <p>With <strong>{edition.stages}</strong> stages that came to life with music and art, this edition was an exciting journey through different genres and creative expressions. From intimate performances to dazzling spectacles, each moment was an opportunity to connect and celebrate diversity.</p>
                            <p>As we look back, we fondly remember the shared moments, the laughter, the friendships forged, and the music that filled our hearts. Thank you for being part of this unforgettable experience!</p>
                            <p>We hope to see you again in future editions of the <strong>{festival.name}</strong>!</p>
                        </Card.Body>
                    </Col>
                    <Col md={3}>
                        <Card>
                            <Card.Header className="ticketsTitle"> <strong>Tickets</strong> </Card.Header>
                            {
                                edition.tickets?.map((ticket, idx) => <TicketsCard {...ticket} key={idx} />)
                            }
                        </Card>
                    </Col>
                </Row>


                <Carousel className="carouselEditionDetails">
                    {
                        edition.sources?.images?.map((img) => {
                            return (
                                <Carousel.Item className="imgCarouselEditionDetails">
                                    <img src={img} />
                                </ Carousel.Item>
                            )
                        })
                    }
                </Carousel>
                <Row>
                    <Col>
                        <h4>Official sponsors:</h4>
                    </Col>
                </Row>
                <ListGroup horizontal className="sponsorCardsContainer">
                    {
                        edition.sponsors?.map((sponsor, idx) => <SponsorCard {...sponsor} key={idx} />)
                    }

                </ListGroup >
                <Row>
                    <Col className='buttonContainer'>
                        <Link to={"/editions"}>
                            <Button variant="dark">Back</Button>
                        </Link>
                        <Link to={`/editions/${editionId}/edit`}>
                            <Button variant="dark">Edit</Button>
                        </Link>

                        <Link to={"/editions"}>
                            <Button onClick={deleteEdition} variant="dark">Delete</Button>
                        </Link>
                    </Col>
                </Row>

            </Container>
    )
}

export default EditionsDetailsPage