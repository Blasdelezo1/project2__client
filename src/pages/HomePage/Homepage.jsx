import { Carousel, Container, Card, Row, Col, } from 'react-bootstrap'
import './HomePage.css'
import burningManHp from './../../assets/images/burning-man.jpg'
import tommorrrowLandHp from './../../assets/images/tommorrowland-hp-image.jpg'
import snowBombingHp from './../../assets/images/snowbombing-HP-image.webp'
import ultraEuropeHp from './../../assets/images/ultraeu_HP_image.jpeg'
import primaveraSoundHp from './../../assets/images/primaverasound_HP_image.jpg'
import cardFestHp from './../../assets/images/cardimagehp.jpg'
import cardEditHp from './../../assets/images/editioncardhp.jpg'
import { Link } from 'react-router-dom'

const HomePage = () => {


    return (

        <div className='HomePage'>

            {/* <div className='carouselContainer'>
                <Container>
                    <Carousel className='imgCarouselHp'>
                        <Carousel.Item>
                            <img src={burningManHp}
                                alt='burningManImage'

                            />
                        </ Carousel.Item>
                        <Carousel.Item>
                            <img src={tommorrrowLandHp}
                                alt='tommorrowLandImage'
                            />
                        </ Carousel.Item>
                        <Carousel.Item>
                            <img src={snowBombingHp}
                                alt='snowBombingImage'
                            />
                        </ Carousel.Item>
                        <Carousel.Item>
                            <img src={ultraEuropeHp}
                                alt='ultraEuImage'
                            />
                        </ Carousel.Item>
                        <Carousel.Item>
                            <img src={primaveraSoundHp}
                                alt='primaveraSoundImage'
                            />
                        </ Carousel.Item>
                    </Carousel>
                </Container>
            </div> */}
            <div className="editioncard-hp">

                <Row>
                    <Col>
                        <Link to={`/editions/`} className="EditionCardLinkHp">
                            <Card className="EditiHp">
                                <div className="imgContainerEditionHp">
                                    <Card.Img variant="top" src={cardEditHp} />
                                </div>
                                <Card.Body className="infoContainerEditionHp">
                                    <Card.Title><stron>Explore Editions</stron></Card.Title>

                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <Link to={`/festivals/`} className="FestivalCardLinkHp">
                            <Card className="FestivalCardHp" >
                                <div className="imgContainerFestivalCardHp">
                                    <Card.Img variant="top" src={cardFestHp} />
                                </div>
                                <Card.Body className="infoContainerFestivalCardHp">
                                    <Card.Title>Explore Festivals</Card.Title>

                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>

            </div>
        </div >


    )
}
export default HomePage