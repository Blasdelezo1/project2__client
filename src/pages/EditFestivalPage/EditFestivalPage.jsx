import { Container, Row, Col } from 'react-bootstrap'

import EditFestivalForm from '../../components/EditFestivalForm/EditFestivalForm'
import './EditFestivalPage.css'

const EditFestivalPage = () => {

    return (
        <Container className='EditFestivalPage'>
            <Row>
                <Col>
                    <h1>TITULO</h1>
                    {/* TOTO: TITULO PARA EL FORM */}
                </Col>
            </Row>




            <EditFestivalForm />
        </Container>
    )
}

export default EditFestivalPage