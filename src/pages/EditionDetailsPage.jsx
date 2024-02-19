import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Row, Col, Card, Image } from "react-bootstrap"

import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'


const EditionsDetailsPage = () => {

    const [edition, setEdiotion] = useState([])
    const { editionId } = useParams()



    useEffect(() => loadEditionsDetails(), [])

    const loadEditionsDetails = () => {
        axios
            .get(`${API_BASE_URL}/editions/${editionId}`)
            .then(({ data }) => setEdiotion(data))
            .catch(err => console.log(err))
    }

    return (

        <>
            < Container className="EditionsDetailsPage">

                {
                    edition &&
                    <>
                        <h1>{edition.year}</h1>
                    </>
                }


            </Container >
        </>
    )

}

export default EditionsDetailsPage