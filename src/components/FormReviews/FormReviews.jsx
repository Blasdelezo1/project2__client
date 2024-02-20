import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col } from "react-bootstrap"


import axios from "axios"
import './FormReviews.css'

const FormReviews = () => {

    const [newReview, setNewReview] = useState(
        {
            firstName: '',
            lastName: '',
            review: '',
            starts: 0
        }
    )

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/editions/${editionId}`, newReview)
            .then(() => navigate(`/editions`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setNewReview({ ...newReview, [name]: value })
    }

    return (

        <Container className="FormReviews">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>
                    <h3>New Review</h3>
                    <hr />
                    <Form className="mt-5" onSubmit={handleFormSubmit}>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newReview.firstName}
                                        onChange={handleInputChange}
                                        name={'firstName'}
                                    />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newReview.lastName}
                                        onChange={handleInputChange}
                                        name={'lastName'}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="review">
                                    <Form.Label>Review</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={newReview.review}
                                        onChange={handleInputChange}
                                        name={'review'}
                                    />
                                </Form.Group>

                            </Col>
                        </Row>

                        <div className="d-grid">
                            <Button variant="dark" type="submit">Send Review</Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>


    )
}

export default FormReviews