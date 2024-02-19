import { useNavigate, useParams } from "react-router-dom"
import dataFestivals from './../../../project2_server/db.json'
import './../App.css'
import { Container, Row, Col, Card, Image } from "react-bootstrap"
import { useState, useEffect } from "react"
import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'

// const editionsArr = dataFestivals.editions

const EditionsDetails = () => {

    const [editionsDet, setEdiotionsDetails] = useState([])

    const { editionId } = useParams()

    const navigate = useNavigate()

    useEffect(() => loadEditionsDetails(), [])

    const loadEditionsDetails = () => {
        axios
            .get(`${API_BASE_URL}/editions/${editionId}`)
            .then(({ data }) => setEdiotionsDetails(data))
            .catch(err => console.log(err))
    }
    // const edition = editionsArr.find(edition => edition.id === parseInt(editionId))
    return (

        <>
            < Container className="EditionsDetails">

                {
                    editionsDet &&
                    <>
                        <h1>{editionsDet.year}</h1>
                        {/* <p>{editionsDet.description}</p> */}
                    </>
                }


            </Container >
        </>
    )

}

export default EditionsDetails