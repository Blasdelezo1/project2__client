import { Container } from 'react-bootstrap'
import EditionsList from '../../components/EditionsList/EditionsList'

const API_BASE_URL = 'http://localhost:5005'


const EditionsPage = () => {

    return (
        <Container>

            <h1>Editions</h1>

            <EditionsList />


        </Container >

    )

}

export default EditionsPage