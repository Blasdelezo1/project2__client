import { Container } from 'react-bootstrap'
import FestivalsList from '../../components/FestivalsList/FestivalsList'

import './FestivalsPage.css'

const FestivalsPage = () => {

    return (
        <Container className='FestivalsPage'>

            <h1>Festivals</h1>

            <FestivalsList />

        </Container >
    )
}

export default FestivalsPage