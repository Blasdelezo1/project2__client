import { Carousel, Container, Card, Row, Col, } from 'react-bootstrap'

import burningManHp from './../../assets/images/burning-man.jpg'
import tommorrrowLandHp from './../../assets/images/tommorrowland-hp-image.jpg'
import snowBombingHp from './../../assets/images/snowbombing-HP-image.webp'
import ultraEuropeHp from './../../assets/images/ultraeu_HP_image.jpeg'
import primaveraSoundHp from './../../assets/images/primaverasound_HP_image.jpg'
import cardFestHp from './../../assets/images/cardimagehp.jpg'
import cardEditHp from './../../assets/images/editioncardhp.jpg'
import { Link } from 'react-router-dom'

import './HomePage.css'


const HomePage = () => {


    return (

        <Container className='HomePage'>

            <h1 className='titleHomePage'>BEST FEST</h1>

            <Row>
                <Col>
                    <div className='cardContainerHomePage'>
                        <Link to={`/festivals/`} >
                            <Card className="CardsHomePage">
                                <Card.Img variant="top" src={cardFestHp} alt='Explore Festivals' />
                                <Card.Body className="infoCardHomePage">
                                    <Card.Title><strong>Explore Festivals</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>

                        <Link to={`/editions/`}>
                            <Card className="CardsHomePage">
                                <Card.Img variant="top" src={cardEditHp} alt='Explore Editions' />
                                <Card.Body className="infoCardHomePage">
                                    <Card.Title><strong>Explore Editions</strong></Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    </div>
                </Col>
            </Row>
        </Container>




    )
}
export default HomePage