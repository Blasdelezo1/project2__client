import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'

const EditionCard = ({ id, year, sources, festivalId }) => {

    const [festival, setFestival] = useState({})
    const [isLoading, setIsLoading] = useState(true)


    useEffect(() => {
        if (festivalId) {
            loadFestival()
        }
    }, [{}])



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
        <Link to={`/editions/${id}`}>
            <Card >
                <Card.Img variant="top" src={sources.cover} />
                <Card.Body>
                    <Card.Title>{festival.name}</Card.Title>
                    <Card.Text>{year}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default EditionCard
