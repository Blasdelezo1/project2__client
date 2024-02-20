import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from 'react-bootstrap'
import EditionCard from './../EditionCard/EditionCard'

const API_BASE_URL = 'http://localhost:5005'

const EditionsList = () => {

    const [editions, setEditions] = useState([])

    useEffect(() => loadEditions(), [])

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions?_embed=editions`)
            .then(({ data }) => setEditions(data))
            .catch(err => console.log(err))
    }

    return (
        <Row>
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