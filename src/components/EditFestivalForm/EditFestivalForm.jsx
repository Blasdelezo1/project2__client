import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Form, Row, Col, Container, Button, InputGroup } from 'react-bootstrap'

import axios from 'axios'
import './EditFestivalForm.css'

import { API_BASE_URL } from '../../consts/festival.consts'
import { FESTIVAL_GENRES } from '../../consts/festival.consts'


const EditFestivalForm = () => {

    const [festivalData, setFestivalData] = useState({
        name: '',
        shortDescription: '',
        description: '',
        location: {
            country: '',
            city: '',
            zipcode: ''
        },
        genres: [],
    })

    const { festivalId } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadFestivalDetails(), [])

    const loadFestivalDetails = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${festivalId}`)
            .then(({ data }) => setFestivalData(data))
            .catch(err => console.log(err))
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        axios
            .put(`${API_BASE_URL}/festivals/${festivalId}`, festivalData)
            .then(() => {
                loadFestivalDetails()
                navigate(`/festivals/${festivalId}`)
            })
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name, checked } = e.target
        if (name === 'genres') {
            if (checked) {
                setFestivalData({ ...festivalData, genres: [...festivalData.genres, value] })
            } else {
                setFestivalData({ ...festivalData, genres: festivalData.genres.filter(genre => genre !== value) })
            }
        } else if (name === 'zipcode') {
            setFestivalData({ ...festivalData, location: { ...festivalData.location, [name]: parseInt(value) } })
        } else {
            setFestivalData({ ...festivalData, [name]: value })
        }
    }


    return (


        <Form onSubmit={handleFormSubmit} className='EditFestivalForm'>
            <Row className='rowEditFestival'>
                <Col>
                    <Form.Group controlId="name">
                        <Form.Label>Festival Name</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            defaultValue={festivalData.name}
                            onChange={handleInputChange}
                            name="name"
                        />
                    </Form.Group>
                </Col>

                <Col>
                    <Form.Group controlId="shortDescription">
                        <Form.Label>Short Description</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={festivalData.shortDescription}
                            onChange={handleInputChange}
                            name="shortDescription"
                        />
                        <Form.Text className="text-muted">You will read this text in the Festival Card</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='rowEditFestival'>
                <Col>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            type="text"
                            defaultValue={festivalData.description}
                            onChange={handleInputChange}
                            name="description"
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row className='rowEditFestival'>
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
                            defaultValue={festivalData.location.country}
                            onChange={handleInputChange}
                            name="country"
                        />
                        <Form.Control
                            placeholder="City"
                            type="text"
                            defaultValue={festivalData.location.city}
                            onChange={handleInputChange}
                            name="city"
                        />
                        <Form.Control
                            placeholder="ZipCode"
                            type="number"
                            defaultValue={festivalData.location.zipcode}
                            onChange={handleInputChange}
                            name="zipcode"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row className='rowEditFestival'>
                <Col>
                    <Form.Group controlId="logo">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control
                            disabled
                            type="text"
                            value={festivalData.logo}
                            onChange={handleInputChange}
                            name={'logo'}
                            placeholder="http://"
                        />
                        <Form.Text className="text-muted">Insert the URL of the logo in png format</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className='rowEditFestival'>
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
                                        FESTIVAL_GENRES.map(genre => (
                                            <Form.Check
                                                className="genreCheckbox"
                                                inline
                                                label={genre}
                                                name="genres"
                                                type="checkbox"
                                                id={genre}
                                                key={genre}
                                                value={genre}
                                                checked={festivalData.genres.includes(genre)}
                                                onChange={handleInputChange}
                                            />
                                        ))
                                    }
                                </Container>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Text>Select at least 5 musical genres</Form.Text>
                            </Col>
                        </Row>
                    </Form.Group>
                </Col>
            </Row>
            <div className="buttonEdit">
                <Button variant="dark" type="submit">Save changes</Button>
            </div>
        </Form>

    )
}

export default EditFestivalForm
