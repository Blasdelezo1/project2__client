import { Container, Row, Col } from 'react-bootstrap'

import './EditEditionPage.css'
import EditEditionForm from '../../components/EditEditionForm/EditEditionForm'

const EditEditionPage = () => {

    return (

        <Container className='EditEditionPage'>
            <Row>
                <Col>
                    <h1>Edit Edition</h1>
                </Col>
            </Row>
            <EditEditionForm />
        </Container>
    )
}

export default EditEditionPage