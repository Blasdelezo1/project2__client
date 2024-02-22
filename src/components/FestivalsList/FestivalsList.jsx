import { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap'
import './FestivalsList.css'

import axios from "axios"

import FestivalCard from "../FestivalCard/FestivalCard"
import SearchBar from "../SearchBar/SearchBar"

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

    const loadSearchedFestivals = query => {
        axios
            .get(`${API_BASE_URL}/festivals?name_like=${query}`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }

    const searchHandler = (searchFest) => {
        loadSearchedFestivals(searchFest)
    }

    return (
        <>
            <SearchBar searchHandler={searchHandler} />

            <Row>
                {festivals.map((festival) => (
                    <Col key={festival.id} md={4}>
                        <FestivalCard {...festival} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default FestivalsList