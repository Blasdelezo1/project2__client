import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Spinner, Carousel, Card, CardBody, ListGroup, Figure, Nav } from "react-bootstrap"

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
        if (edition.festivalId) {
            loadFestival()
        }
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

    return (
        isLoading
            ?
            <Spinner animation="grow" />
            :
            <Container className="EditionDetailsPage">
                {
                    edition &&
                    <>
                        <h1>{festival.name} edition {edition.year}</h1>
                    </>
                }

                <Nav fill variant="tabs" defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href="/editions/{editionId}">Information</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">Media</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Sponsors</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Card className="editionInformation">
                    <Card.Body>
                        From {edition.starts} to {edition.ends}
                    </Card.Body>
                    <Card.Body>
                        Capacity: {edition.capacity}
                    </Card.Body>
                    <Card.Body>
                        Stages: {edition.stages}
                    </Card.Body>
                    <CardBody>
                        <Card>
                            <Card.Header>Tickets</Card.Header>
                            {
                                edition.tickets.map((ticket) => {
                                    return (
                                        <Card.Body key={ticket.price}>
                                            <Card.Title>{ticket.type}</Card.Title>
                                            <Card.Text>{ticket.price}</Card.Text>
                                        </Card.Body>
                                    )
                                })
                            }
                        </Card>
                    </CardBody>
                </Card>

                <ListGroup horizontal>
                    {
                        edition.sponsors.map((sponsor) => {
                            return (
                                <ListGroup.Item key={sponsor.name}>
                                    <Figure>
                                        <Figure.Image
                                            width={171}
                                            height={180}
                                            alt="171x180"
                                            src={sponsor.logo}
                                        />
                                    </Figure>
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup >


                {
                    <Carousel>
                        {
                            edition.sources.images.map((img) => {
                                return (
                                    <Carousel.Item>
                                        <img src={img} />
                                    </ Carousel.Item>
                                )

                            })
                        }




                    </Carousel>
                }
            </Container>
    )
}

export default EditionsDetailsPage