import { Container, Row, Col } from "react-bootstrap"
import NewFestivalForm from "../../components/NewFestivalForm/NewFestivalForm"

import './CreateFestivalPage.css'


const CreateFestivalPage = () => {


    return (

        <Container className="NewFestivalForm">

            <Row>
                <Col>

                    <h1>Create Festival</h1>

                    <NewFestivalForm />

                </Col>
            </Row>

        </Container>
    )

}

export default CreateFestivalPage