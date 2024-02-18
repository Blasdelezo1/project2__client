import { Link, useParams } from "react-router-dom"
// import dataFestivals from "./../../../Project-react-server/db.json"
import dataFestivals from './../../../project2_server/db.json'
import './../App.css'
import { Container, Row, Col, Card, Image } from "react-bootstrap"


const editionsArr = dataFestivals.editions

const EditionsDetails = () => {

    const { editionId } = useParams()

    const edition = editionsArr.find(edition => edition.id === parseInt(editionId))


    return (

        <>
            < Container className="EditionsDetails">

                <h1>{edition.year}</h1>


            </Container >
        </>
    )

}

export default EditionsDetails