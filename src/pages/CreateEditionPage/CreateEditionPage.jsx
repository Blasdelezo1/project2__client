import { Container, Row, Col } from "react-bootstrap"
import NewEditionForm from "../../components/NewEditionForm/NewEditionForm"

import './CreateEditionPage.css'


const CreateEditionPage = () => {


    return (

        <Container className="CreateEditionPage">

            <Row>
                <Col>

                    <h1>Create Edition</h1>

                    <NewEditionForm />

                </Col>
            </Row>

        </Container>
    )

}

export default CreateEditionPage