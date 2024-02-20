import { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap'

import axios from "axios"

import FestivalCard from "../FestivalCard/FestivalCard"

const API_BASE_URL = 'http://localhost:5005'

const FestivalsList = () => {

    const [festivals, setFestivals] = useState([])

    useEffect(() => loadFestivals(), [])

    const loadFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals?_embed=festivals`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }


    return (
        <Row>

            {
                festivals.map((festival) => (
                    <Col key={festival.id} md={3}>
                        <FestivalCard {...festival} />
                    </Col>
                ))
            }

        </Row>

    )
}

export default FestivalsList