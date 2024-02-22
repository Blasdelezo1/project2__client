import { Container, Row, Col } from 'react-bootstrap'

import EditFestivalForm from '../../components/EditFestivalForm/EditFestivalForm'
import './EditFestivalPage.css'

const EditFestivalPage = () => {

    return (
        <Container className='EditFestivalPage'>
            <Row>
                <Col>
                    <h1>Edit festival</h1>
                </Col>
            </Row>
            <EditFestivalForm />
        </Container>
    )
}

export default EditFestivalPage