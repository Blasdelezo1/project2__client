import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Form, Row, Col, InputGroup } from "react-bootstrap"

import axios from "axios"
import './NewEditionForm.css'


const API_BASE_URL = 'http://localhost:5005'

const NewEditionForm = () => {

    const [festivals, setFestivals] = useState([])
    const [newEdition, setNewEdition] = useState({
        festivalId: '',
        year: 2024,
        starts: '',
        ends: '',
        capacity: 0,
        stages: 0,
        tickets: [{ type: '', price: 0 }],
        sources: [{
            cover: '',
            images: ''
        }]
    })

    const navigate = useNavigate()

    useEffect(() => loadFestivals())

    const loadFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }

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
            if (index !== -1) {
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
        } else if (name === 'cover') {
            setNewEdition({
                ...newEdition,
                sources: {
                    ...newEdition.sources,
                    cover: value
                }
            })
        }
    }

    const handleTicketChange = (e, index, field) => {
        const { value } = e.target
        setNewEdition(prevState => {
            const updatedTickets = [...prevState.tickets]
            updatedTickets[index][field] = value
            return { ...prevState, tickets: updatedTickets }
        })
    }

    const addTicket = () => {
        setNewEdition({ ...newEdition, tickets: [...newEdition.tickets, { type: '', price: 0 }] })
    }

    const handleSourceChange = (e, index) => {
        const { value } = e.target
        const updatedSources = [...newEdition.sources]
        updatedSources[index] = { images: value }
        setNewEdition({ ...newEdition, sources: updatedSources })
    }

    const addSource = () => {
        setNewEdition({ ...newEdition, sources: [...newEdition.sources, { images: '' }] })
    }


    return (

        <div className='NewEditionForm'>
            <Form onSubmit={handleFormSubmit} md={{ span: 10, offset: 1 }}>
                <Row className="RowMarginBottom">
                    <Col>
                        <Form.Group controlId="festivalId">
                            <Form.Label>Festival</Form.Label>
                            <Form.Select
                                value={newEdition.festivalId}
                                onChange={(e) => setNewEdition({ ...newEdition, festivalId: e.target.value })}
                            >
                                <option value="">Choose festival...</option>
                                {
                                    festivals.map((festival) => (
                                        <option key={festival.id} value={festival.id}>{festival.name}</option>
                                    ))
                                }
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="year">
                            <Form.Label>Edition Year</Form.Label>
                            <Form.Control
                                type="number"
                                value={newEdition.year}
                                onChange={handleInputChange}
                                name={'year'}
                                placeholder="2024"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="RowMarginBottom">
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
                <Row className="RowMarginBottom">
                    <Col>
                        <Form.Group controlId="capacity">
                            <Form.Label>Capacity</Form.Label>
                            <Form.Control
                                type="number"
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
                                type="number"
                                value={newEdition.stages}
                                onChange={handleInputChange}
                                name={'stages'}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="RowMarginBottom">
                    <Col>
                        <Row>
                            <Col>
                                <Form.Label>Tickets</Form.Label>
                            </Col>
                        </Row>
                        {newEdition.tickets.map((ticket, index) => (
                            <Row key={index}>
                                <Col>
                                    <Form.Control
                                        placeholder="Type"
                                        type="text"
                                        value={ticket.type}
                                        onChange={(e) => handleTicketChange(e, index, 'type')}
                                    />
                                    < Form.Text>Add all the types of tickets you need</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="Price"
                                        type="number"
                                        value={ticket.price}
                                        onChange={(e) => handleTicketChange(e, index, 'price')}
                                    />
                                </Col>
                            </Row>
                        ))}
                        <Button variant="dark" onClick={addTicket}>Add Ticket</Button>
                    </Col>
                </Row>
                <Row className="RowMarginBottom">
                    <Col>
                        <Form.Group controlId="cover">
                            <Form.Label>Edition Cover</Form.Label>
                            <Form.Control
                                type="text"
                                value={newEdition.sources.cover}
                                onChange={handleInputChange}
                                placeholder="https://"
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="RowMarginBottom">
                    <Col>
                        {newEdition.sources.map((source, index) => (
                            <Form.Group controlId={`source-${index}`} key={index}>
                                <Form.Label>Images</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={source.images}
                                    onChange={(e) => handleSourceChange(e, index)}
                                    placeholder="https://"
                                />
                                < Form.Text>Add at least 2 images</Form.Text>
                            </Form.Group>
                        ))}
                        <Button variant="dark" onClick={addSource}>Add Image Source</Button>
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
