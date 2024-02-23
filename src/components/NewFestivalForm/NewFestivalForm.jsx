import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col, InputGroup } from "react-bootstrap"

import axios from "axios"
import './NewFestivalForm.css'
import { FESTIVAL_GENRES } from "../../consts/festival.consts"

const API_BASE_URL = "https://bestfest-server.fly.dev"


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

        <Form onSubmit={handleFormSubmit} md={{ span: 10, offset: 1 }}>
            <Row className="RowMarginBottom">
                <Col>
                    <Form.Group controlId="name">
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
                    <Form.Group controlId="shortDescription">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            type="text"
                            value={newFestival.shortDescription}
                            onChange={handleInputChange}
                            name={'shortDescription'}
                        />
                        <Form.Text className="text-muted">You will read this text in the Festival Card</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="RowMarginBottom">
                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            className="descriptionNewFestival"
                            value={newFestival.description}
                            onChange={handleInputChange}
                            name={'description'}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className="RowMarginBottom">
                <Col>
                    <Row>
                        <Col>
                            <Form.Label>Location</Form.Label>
                        </Col>
                    </Row>
                    <InputGroup controlId="location">
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
            <Row className="RowMarginBottom">
                <Col>
                    <Form.Group controlId="logo">
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
            </Row>
            <Row className="RowMarginBottom">
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
                                        FESTIVAL_GENRES.map((genre) => {
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
                                < Form.Text>Select at least 5 musical genres</Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <div className="buttonCreate">
                <Button variant="dark" type="submit">Create Festival</Button>
            </div>
        </Form>

    )
}

export default NewFestivalForm