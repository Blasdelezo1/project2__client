import './NewEditionForm.css'

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap"

import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'

const NewEditionForm = () => {

    const navigate = useNavigate()

    const [newEdition, setNewEdition] = useState({
        starts: '',
        ends: '',
        capacity: '',
        stages: '',
        tickets: [
            {
                type: '',
                price: ''
            }
        ],
        sources: {
            images: ''
        }

    })

    const handleFormSubmit = (e) => {
        e.preventDefault()

        axios
            .post(`${API_BASE_URL}/editions`, newEdition)
            .then(() => navigate(`/editions`))
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        if (name === 'starts' || name === 'ends' ||
            name === 'capacity' || name === 'stages')
            setNewEdition({ ...newEdition, [name]: value })

        else if (name === 'type' || name === 'price') {
            const tickets = [...newEdition.tickets]
            const index = tickets.findIndex(ticket => ticket.type === name)
            if (index !== 1) {
                tickets[index][name] = value
            } else {
                tickets.push({ [name]: value })
            }

            setNewEdition({ ...newEdition, tickets })
        }
        else if (name === 'images') {
            setNewEdition({
                ...newEdition,
                sources: {
                    ...newEdition.sources,
                    images: value
                }
            })
        }

    }

    return (

        <div className=' NewEditionForm'>
            <Form onSubmit={handleFormSubmit} md={{ span: 10, offset: 1 }}>
                <Row>
                    <Col>
                        <Form.Group controlId="starts">
                            <Form.Label>Opening date</Form.Label>
                            <Form.Control
                                type="date"
                                value={newEdition.starts}
                                onChange={handleInputChange}
                                name={'starts'}
                            />

                        </Form.Group>
                    </Col>

                    <Col>
                        <Form.Group controlId="ends">
                            <Form.Label>Closing date</Form.Label>
                            <Form.Control
                                type="date"
                                value={newEdition.ends}
                                onChange={handleInputChange}
                                name={'ends'}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="capacity">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="text"
                                className="capacityedition"
                                value={newEdition.capacity}
                                onChange={handleInputChange}
                                name={'capacity'}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="Stages">
                            <Form.Label>Stages</Form.Label>
                            <Form.Control
                                type="text"
                                value={newEdition.stages}
                                onChange={handleInputChange}
                                name={'stages'}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col>
                                <Form.Label>Tickets</Form.Label>
                            </Col>
                        </Row>
                        <InputGroup controlId="Tickets">
                            <Form.Control
                                placeholder="Type"
                                type="text"
                                value={newEdition.tickets.type}
                                onChange={handleInputChange}
                                name={'type'}
                            />
                            <Form.Control
                                placeholder="Price"
                                type="text"
                                value={newEdition.tickets.price}
                                onChange={handleInputChange}
                                name={'Price'}
                            />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group controlId="Sources">
                            <Form.Label>Picture</Form.Label>
                            <Form.Control
                                type="text"
                                value={newEdition.sources.images}
                                onChange={handleInputChange}
                                name={'Sources'}
                                placeholder="http://"
                            />
                        </Form.Group>
                    </Col>
                </Row>

                <div className="buttonCreate">
                    <Button variant="dark" type="submit">Create Edition</Button>
                </div>
            </Form>
        </div>

    )

}

export default NewEditionForm