import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Spinner, Carousel, Card, CardBody, ListGroup, Figure, Nav } from "react-bootstrap"

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
                                edition.tickets.map((ticket, idx) => <TicketsCard {...ticket} key={idx} />)
                            }
                        </Card>
                    </CardBody>
                </Card>

                <ListGroup horizontal>
                    {
                        edition.sponsors.map((sponsor, idx) => <SponsorCard {...sponsor} key={idx} />)
                    }
                </ListGroup >
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

            </Container>
    )
}

export default EditionsDetailsPage