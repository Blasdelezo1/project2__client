import { useEffect, useState } from "react"
import axios from "axios"
import { Col, Row } from 'react-bootstrap'
import EditionCard from './../EditionCard/EditionCard'


const API_BASE_URL = 'http://localhost:5005'


const EditionList = () => {

    const [editions, setEdiotions] = useState([])

    useEffect(() => loadEditions(), [])

    const loadEditions = () => {
        axios
            .get(`${API_BASE_URL}/editions`)
            .then(({ data }) => setEdiotions(data))
            .catch(err => console.log(err))
    }


    return (

        <Row className="g-4">

            {
                editions.map((edition) => (
                    <Col key={edition.id} md={3}>
                        <EditionCard {...editions} />
                    </Col>
                ))
            }

        </Row>
    )
}

export default EditionList