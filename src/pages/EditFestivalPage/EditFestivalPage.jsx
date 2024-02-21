import { Container, Row, Col } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import EditFestivalForm from '../../components/EditFestivalForm/EditFestivalForm'


const EditFestivalPage = () => {

    const { festivalId } = useParams()


    return (
        <Container>

            <Row>
                <Col>
                    {<EditFestivalForm />}
                </Col>
            </Row>
        </Container>
    )

}

export default EditFestivalPage