import { Container, Row, Col } from "react-bootstrap"
import NewEditionForm from "../../components/NewEditionForm/NewEditionForm"

import './CreateEditionPage.css'


const CreateEditionPage = () => {


    return (

        <Container className="CreateEditionPage">

            <Row>
                <Col md={{ span: 10, offset: 1 }}>

                    <h1>Design your Edition</h1>

                    <NewEditionForm />

                </Col>
            </Row>

        </Container>
    )

}

export default CreateEditionPage