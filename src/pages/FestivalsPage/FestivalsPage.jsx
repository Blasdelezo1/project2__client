import { Container } from 'react-bootstrap'
import FestivalsList from '../../components/FestivalsList/FestivalsList'
import SideBar from '../../components/Aside/SideBar'
import './FestivalsPage.css'

const FestivalsPage = () => {

    return (
        <>

            <Container className='FestivalsPage'>

                <h1>Festivals</h1>

                <FestivalsList />
            </Container >

            <SideBar />

        </>



    )
}

export default FestivalsPage