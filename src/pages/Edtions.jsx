import { Link } from "react-router-dom"
import './../App.css'
import Card from 'react-bootstrap/Card'
import Container from "react-bootstrap/esm/Container"
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'


const Editions = () => {

    const [editions, setEdiotions] = useState([])

    useEffect(() => loadEditions(), [])

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions`)
            .then(({ data }) => setEdiotions(data))
            .catch(err => console.log(err))
    }


    return (
        <Container>
            <Card body className="mt-2">

                <h1>Festival editions</h1>

                <Row xs={2} md={4} className="g-4">

                    {
                        editions.map((edition) => (
                            <Link to={`/editions/${edition.id}`}>
                                <Col key={edition.id}>
                                    <Card >
                                        <Card.Img variant="top" src={edition.sources.cover} />
                                        <Card.Body>
                                            <Card.Title>Título?</Card.Title>
                                            <Card.Text>???</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Link>
                        ))
                    }

                </Row>
            </Card>
        </Container >

    )

}

export default Editions