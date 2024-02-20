import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

import axios from "axios"
import './EditionCard.css'

const API_BASE_URL = 'http://localhost:5005'

const EditionCard = ({ id, year, sources, festivalId }) => {

    const [festival, setFestival] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        festivalId && loadFestival()
    }, [])



    const loadFestival = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${festivalId}`)
            .then(({ data }) => {
                setFestival(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        <Link to={`/editions/${id}`} className="EditionCardLink">
            <Card className="EditionCard">
                <div className="imgContainerEditionCard">
                    <Card.Img variant="top" src={sources.cover} />
                </div>
                <Card.Body className="infoContainerEditionCard">
                    <Card.Title>{festival.name}</Card.Title>
                    <Card.Text>{year}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default EditionCard
