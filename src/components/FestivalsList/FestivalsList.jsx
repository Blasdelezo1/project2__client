import { useEffect, useState } from "react"
import { Col, Row, Container, Button } from 'react-bootstrap'

import axios from "axios"

import FestivalCard from "../FestivalCard/FestivalCard"
import SearchBar from "../SearchBar/SearchBar"

const API_BASE_URL = 'http://localhost:5005'

const FestivalsList = () => {

    const [festivals, setFestivals] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => loadFestivals(), [])

    const loadFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals?_embed=festivals`)
            .then(({ data }) => setFestivals(data))
            .catch(err => console.log(err))
    }

    useEffect(() => loadSearchedFestivals(), [query])

    const loadSearchedFestivals = () => {
        axios
            .get(`${API_BASE_URL}/festivals?name_like=${query}`)
            .then(({ data }) => setFestivals(data))
    }

    const searchHandler = (searchFest) => {
        setQuery(searchFest)
    }




    return (
        <>


            <div className="button-container">

                <Button variant="dark" type="submit">Sort by genre</Button>
                <Button variant="dark" type="submit">Outdoor?</Button>
            </div>
            <SearchBar searchHandler={searchHandler} />
            <Row>

                {
                    festivals.map((festival) => (

                        <Col key={festival.id} md={4}>
                            <FestivalCard {...festival} />
                        </Col>
                    ))
                }

            </Row>

        </>
    )
}

export default FestivalsList