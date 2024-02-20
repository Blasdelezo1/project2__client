import { Carousel, Container } from 'react-bootstrap'
import './HomePage.css'
import burningManHp from './../../assets/images/burning-man.jpg'
import tommorrrowLandHp from './../../assets/images/tommorrowland-hp-image.jpg'
import snowBombingHp from './../../assets/images/snowbombing-HP-image.webp'
import ultraEuropeHp from './../../assets/images/ultraeu_HP_image.jpeg'
import primaveraSoundHp from './../../assets/images/primaverasound_HP_image.jpg'

const HomePage = () => {


    return (

        <div className='HomePage'>
            <Container>

                <Carousel>
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

        </div>


    )
}
export default HomePage