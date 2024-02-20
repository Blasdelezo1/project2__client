import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"

import axios from "axios"
import './NewFestivalForm.css'

const API_BASE_URL = 'http://localhost:5005'

const genres = ["Pop", "Rock", "Hip-hop", "R&B", "Jazz", "Blues", "Country", "Techno", "House", "Trance", "Drum and Bass", "Reggae", "Punk", "Metal", "Indie", "Alternative", "Funk", "Disco"]

const NewFestivalForm = () => {

    const [newFestival, setNewFestival] = useState({
        name: '',
        shortDescription: '',
        description: '',
        location: {
            country: '',
            city: '',
            zipcode: ''
        },
        logo: '',
        genres: [],
        outdoor: false,
        sources: {
            images: ''
        }

    })

    const navigate = useNavigate()

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/festivals`, newFestival)
            .then(() => navigate(`/festivals`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setNewFestival({ ...newFestival, [name]: value })
    }

    return (

        <Container className="NewFestivalForm">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <h3>New Festival</h3>
                    <hr />
                    <Form className="mt-5" onSubmit={handleFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Festival Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.name}
                                        onChange={handleInputChange}
                                        name={'name'}
                                    />

                                </Form.Group>
                            </Col>

                            <Col>
                                <Form.Group className="mb-3" controlId="shortDescription">
                                    <Form.Label>Short Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.shorDescription}
                                        onChange={handleInputChange}
                                        name={'shortDescription'}
                                    />
                                    <Form.Text className="text-muted">You will read this text in the Festival Card</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.description}
                                        onChange={handleInputChange}
                                        name={'description'}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Row>
                                    <Col>
                                        <Form.Label>Location</Form.Label>
                                    </Col>
                                </Row>
                                <InputGroup className="mb-3" controlId="location">
                                    <Form.Control
                                        placeholder="Country"
                                        type="text"
                                        value={newFestival.location.country}
                                        onChange={handleInputChange}
                                        name={'country'}
                                    />
                                    <Form.Control
                                        placeholder="City"
                                        type="text"
                                        value={newFestival.location.city}
                                        onChange={handleInputChange}
                                        name={'city'}
                                    />
                                    <Form.Control
                                        placeholder="ZipCode"
                                        type="number"
                                        value={newFestival.location.zipcode}
                                        onChange={handleInputChange}
                                        name={'zipcode'}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="logo">
                                    <Form.Label>Logo</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.logo}
                                        onChange={handleInputChange}
                                        name={'logo'}
                                        placeholder="http://"
                                    />
                                    <Form.Text className="text-muted">Insert the URL of the logo in png format</Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="images">
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.sources.images}
                                        onChange={handleInputChange}
                                        name={'images'}
                                        placeholder="http://"
                                    />
                                    <Form.Text className="text-muted">Insert the URL of the image</Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="genres">
                                    <Row>
                                        <Col>
                                            <Form.Label>Musical genres</Form.Label>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Container className="genres-box">
                                                {
                                                    genres.map((genre) => {
                                                        return (
                                                            <Form.Check
                                                                className="genreCheckbox"
                                                                inline
                                                                label={genre}
                                                                name={genre}
                                                                type="checkbox"
                                                                id={genre}
                                                                key={genre}
                                                                value={newFestival.genres}
                                                                onChange={handleInputChange}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Container>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            < Form.Text className="text-muted">Select at least 5 musical genres</Form.Text>
                                        </Col>
                                    </Row>


                                </Form.Group>
                            </Col>
                        </Row>
                        <div className="d-grid">
                            <Button variant="dark" type="submit">Create Festival</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}

export default NewFestivalForm