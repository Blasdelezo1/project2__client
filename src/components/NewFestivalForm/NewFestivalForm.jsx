import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"

import axios from "axios"
import './NewFestivalForm.css'

const API_BASE_URL = 'http://localhost:5005'

const genres = ["Pop", "Rock", "Hip-hop", "R&B", "Jazz", "Blues", "Country", "Techno", "House", "Trance", "Drum and Bass", "Reggae", "Punk", "Metal", "Indie", "Alternative", "Funk", "Disco"]

const NewFestivalForm = () => {

    const navigate = useNavigate()

    const [newFestival, setNewFestival] = useState({
        name: '',
        shortDescription: '',
        description: '',
        location: {
            country: '',
            city: '',
            zipcode: 0
        },
        logo: '',
        genres: [],
        outdoor: false,
        sources: {
            images: ''
        }
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/festivals`, newFestival)
            .then(() => navigate(`/festivals`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        if (name === 'country' || name === 'city' || name === 'zipcode') {
            setNewFestival({
                ...newFestival,
                location: {
                    ...newFestival.location,
                    [name]: value
                }
            });
        } else if (name === 'genres') {
            const { checked } = e.target
            const { value: genre } = e.target

            let updatedGenres
            if (checked) {
                updatedGenres = [...newFestival.genres, genre];
            } else {
                updatedGenres = newFestival.genres.filter((g) => g !== genre)
            }
            setNewFestival({ ...newFestival, genres: updatedGenres })
        } else {
            setNewFestival({ ...newFestival, [name]: value })
        }
    }

    return (


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
                                                    name="genres"
                                                    type="checkbox"
                                                    id={genre}
                                                    key={genre}
                                                    value={genre}
                                                    checked={newFestival.genres.includes(genre)}
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

    )
}

export default NewFestivalForm