import { Container, Button, Form, Row, Col } from "react-bootstrap"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const API_BASE_URL = 'http://localhost:5005'

const NewFestivalForm = () => {

    const [newFestival, setNewFestival] = useState({
        name: '',
        description: ''

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

        <Container>
            <Row>
                <Col md={{ span: 6, offset: 2 }}>
                    <h3>New Festival</h3>
                    <hr />
                    <Form className="mt-5" onSubmit={handleFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="name">
                                    <Form.Label>Fest Title </Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newFestival.name}
                                        onChange={handleInputChange}
                                        name={'name'}
                                    />
                                    <Form.Text className="text-muted"></Form.Text>
                                </Form.Group>
                            </Col>

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