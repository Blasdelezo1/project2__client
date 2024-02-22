import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, Row, Col } from "react-bootstrap"

import axios from "axios"
import './EditEditionForm.css'

import { API_BASE_URL } from '../../consts/festival.consts'

const EditEditionForm = () => {

    const [festivals, setFestivals] = useState([])
    const [editionData, setEditionData] = useState({
        year: '',
        starts: '',
        ends: '',
        capacity: '',
        stages: '',
        tickets: [{ type: '', price: 0 }],
        sources: [{ images: '' }]
    })

    const { editionId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        loadEditionData(editionId)
        loadFestivals()
    }, [editionId])

    const loadEditionData = () => {
        axios.get(`${API_BASE_URL}/editions/${editionId}`)
            .then(({ data }) => {
                setEditionData(data)
            })
            .catch(err => console.error(err))
    }

    const loadFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }

    const handleFormSubmit = (e) => {

        e.preventDefault()

        axios
            .put(`${API_BASE_URL}/editions/${editionId}`, editionData)
            .then(() => {
                loadEditionData()
                navigate(`/editions/${editionId}`)

            })
            .catch(err => console.log(err))
    }

    const handleInputChange = (e) => {
        const { value, name } = e.target
        setEditionData({ ...editionData, [name]: value })
    }

    const handleTicketChange = (e, index, field) => {
        const { value } = e.target
        const updatedTickets = [...editionData.tickets]
        updatedTickets[index][field] = value
        setEditionData({ ...editionData, tickets: updatedTickets })
    }

    const addTicket = () => {
        setEditionData({ ...editionData, tickets: [...editionData.tickets, { type: '', price: 0 }] })
    }

    return (
        <div className='EditEditionForm'>
            <Form onSubmit={handleFormSubmit}>
                <Row className="RowMarginBottom">
                    <Col>
                        <Form.Group controlId="year">
                            <Form.Label>Edition Year</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={editionData.year}
                                value={editionData.year}
                                onChange={handleInputChange}
                                name="year"
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
                                defaultValue={editionData.starts}
                                value={editionData.starts}
                                onChange={handleInputChange}
                                name="starts"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="ends">
                            <Form.Label>Closing date</Form.Label>
                            <Form.Control
                                type="date"
                                defaultValue={editionData.ends}
                                value={editionData.ends}
                                onChange={handleInputChange}
                                name="ends"
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
                                defaultValue={editionData.capacity}
                                value={editionData.capacity}
                                onChange={handleInputChange}
                                name="capacity"
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="stages">
                            <Form.Label>Stages</Form.Label>
                            <Form.Control
                                type="number"
                                defaultValue={editionData.stages}
                                value={editionData.stages}
                                onChange={handleInputChange}
                                name="stages"
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
                        {editionData.tickets.map((ticket, index) => (
                            <Row key={index}>
                                <Col>
                                    <Form.Control
                                        placeholder="Type"
                                        type="text"
                                        defaultValue={editionData.tickets.type}
                                        value={ticket.type}
                                        onChange={(e) => handleTicketChange(e, index, 'type')}
                                    />
                                    <Form.Text>Add all the types of tickets you need</Form.Text>
                                </Col>
                                <Col>
                                    <Form.Control
                                        placeholder="Price"
                                        type="number"
                                        defaultValue={editionData.tickets.price}
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
                        {editionData.sources.map((source, index) => (
                            <Form.Group controlId={`source-${index}`} key={index}>
                                <Form.Label>Images</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={source.images}
                                    readOnly
                                />
                            </Form.Group>
                        ))}
                    </Col>
                </Row>

                <div className="buttonCreate">
                    <Button variant="dark" type="submit">Save Changes</Button>
                </div>
            </Form>
        </div>
    )
}

export default EditEditionForm
