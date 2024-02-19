import { Container, Button, Form, Row, Col } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const FormContactUs = () => {

    return (
        <div className="FormContactUs">
            <Container>
                <h3>Case Information</h3>
                <hr />
                <Form className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={'email'}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="ContactName">
                                <Form.Label>Contact Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={'contactName'} />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="category">
                                <Form.Label>Category</Form.Label>
                                <Form.Control
                                    as='select'
                                    name={'category'}
                                    autoComplete="category">

                                    <option value="category1">Ticket Support</option>
                                    <option value="category2">Sponsorship</option>
                                    <option value="category3">Payment Process</option>
                                    <option value="category4">Minimum age</option>
                                    <option value="category5">Preregister</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3" controlId="subject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name={'subject'} />

                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as='textarea'
                                    rows={3}
                                    type="text"
                                    name={'description'} />

                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>

    )
}

export default FormContactUs
