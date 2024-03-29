import { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap'

import axios from "axios"

import EditionCard from './../EditionCard/EditionCard'
import SearchBar from "../SearchBar/SearchBar"
import './EditionsList.css'

const API_BASE_URL = "https://bestfest-server.fly.dev"

const EditionsList = () => {

    const [editions, setEditions] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => loadEditions(), [])

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions?_embed=editions`)
            .then(({ data }) => setEditions(data))
            .catch(err => console.log(err))
    }

    useEffect(() => loadSearchedEditions(), [query])

    const loadSearchedEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions?year_like=${query}`)
            .then(({ data }) => setEditions(data))
    }

    const searchHandler = (searchEdit) => {
        setQuery(searchEdit)
    }

    return (

        <Row>
            <SearchBar searchHandler={searchHandler} />
            <div >
                <p className="filtered-edition-list"><i>*filtered by year*</i></p>
            </div>

            {
                editions.map((edition) => (
                    <Col key={edition.id} md={3}>
                        <EditionCard {...edition} />
                    </Col>
                ))
            }
        </Row>
    )

}


export default EditionsList