import { Container, Row, Col } from 'react-bootstrap'

import EditFestivalForm from '../../components/EditFestivalForm/EditFestivalForm'


const EditFestivalPage = () => {



    return (
        <Container>
            <Row>
                <Col>
                    <h1>Edit { }</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {<EditFestivalForm />}
                </Col>
            </Row>
        </Container>
    )

}

export default EditFestivalPage