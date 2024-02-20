import { Container } from 'react-bootstrap'

import EditionsList from '../../components/EditionsList/EditionsList'

import './EditionsPage.css'

const API_BASE_URL = 'http://localhost:5005'


const EditionsPage = () => {

    return (
        <Container className='EditionPage'>

            <h1>Editions</h1>

            <EditionsList />


        </Container >

    )

}

export default EditionsPage