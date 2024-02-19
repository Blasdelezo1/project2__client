import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Container, Spinner } from "react-bootstrap"

import axios from "axios"

const API_BASE_URL = 'http://localhost:5005'

const EditionsDetailsPage = () => {

    const [edition, setEdition] = useState({})
    const [festival, setFestival] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const { editionId } = useParams()

    useEffect(() => { loadEditionsDetails() }, [])

    useEffect(() => {
        if (edition.festivalId) {
            loadFestival()
        }
    }, [edition])

    const loadEditionsDetails = () => {
        axios
            .get(`${API_BASE_URL}/editions/${editionId}`)
            .then(({ data }) => {
                setEdition(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    const loadFestival = () => {
        axios
            .get(`${API_BASE_URL}/festivals/${edition.festivalId}`)
            .then(({ data }) => {
                setFestival(data)
                setIsLoading(false)
            })
            .catch(err => console.log(err))
    }

    return (
        isLoading
            ?
            <Spinner animation="grow" />
            :
            <Container className="EditionsDetailsPage">
                {
                    edition &&
                    <>
                        <h1>{festival.name} edition {edition.year}</h1>
                    </>
                }
            </Container>
    )
}

export default EditionsDetailsPage