import { Card } from "react-bootstrap"

import './SponsorCard.css'

const SponsorCard = ({ logo, name }) => {

    return (
        <Card className="SponsorCard">
            <div className="imgSponsorContainer">
                <Card.Img src={logo} alt={name} className="SponsorImg" />
            </div>
        </Card>
    )
}


export default SponsorCard