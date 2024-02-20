import { Card } from "react-bootstrap"

const SponsorCard = ({ logo, name }) => {

    return (
        <Card className="SponsorCardLogo">
            <Card.Img src={logo} alt={name} />
        </Card>
    )
}


export default SponsorCard