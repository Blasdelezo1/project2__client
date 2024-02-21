import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from 'react-bootstrap'
import EditionCard from './../EditionCard/EditionCard'
import SearchBar from "../SearchBar/SearchBar"
import './EditionsList.css'

const API_BASE_URL = 'http://localhost:5005'

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
            <div className="container">
                <h4>Find your edition</h4>
                <p><i>*filtered by year*</i></p>
            </div>

            <SearchBar searchHandler={searchHandler} />
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