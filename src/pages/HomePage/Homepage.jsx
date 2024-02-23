import { Container, Card, Row, Col, } from 'react-bootstrap'


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