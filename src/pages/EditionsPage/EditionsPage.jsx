import { Container } from 'react-bootstrap'
import EditionsList from '../../components/EditionsList/EditionsList'
import './EditionsPage.css'

const EditionsPage = () => {

    return (
        <Container className='EditionPage'>

            <h1>Editions</h1>

            <EditionsList />

        </Container >
    )
}

export default EditionsPage