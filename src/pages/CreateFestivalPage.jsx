import { Container, Button, Form, Row, Col } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = 'localhost:5005'

const CreateFestivalPage = () => {

    // const [festival, setFestival] = useState({
    //     name: '',
    //     description: ''

    // })

    // const navigate = useNavigate()

    // const handleFormSubmit = (e) => {
    //     e.preventDefeault()

    //     axios
    //     .post(`${}`)
    // }

    return (

        <div className="CreateFestivalPage">

            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 2 }}>
                        <h3>New Festival</h3>
                        <hr />
                        <Form className="mt-5">
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3" controlId="title">
                                        <Form.Label>Fest Title </Form.Label>
                                        <Form.Control
                                            type="text"
                                            value=''
                                            onChange=''
                                            name={'title'}
                                        />
                                        <Form.Text className="text-muted"></Form.Text>
                                    </Form.Group>
                                </Col>

                                <Form.Group className="mb-3" controlId="description">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value=''
                                        onChange=''
                                        name={'description'}
                                    />
                                </Form.Group>

                                <Col>


                                </Col>

                            </Row>



                        </Form>

                    </Col>















                </Row>
            </Container>

        </div>


    )

}

export default CreateFestivalPage