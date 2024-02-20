import { Container } from "react-bootstrap"
import NewFestivalForm from "../../components/NewFestivalForm/NewFestivalForm"


const CreateFestivalPage = () => {


    return (

        <Container className="NewFestivalForm">
            <Row>
                <Col md={{ span: 10, offset: 1 }}>

                    <h1>Create Festival</h1>

                    <NewFestivalForm />

                </Col>
            </Row>

        </Container>
    )

}

export default CreateFestivalPage