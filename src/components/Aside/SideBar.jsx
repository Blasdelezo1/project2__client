import './SideBar.css'
import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from "react"
import { Col, Row } from 'react-bootstrap'

import axios from "axios"


const API_BASE_URL = 'http://localhost:5005'

const SideBar = () => {


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
            .get(`${API_BASE_URL}/festivals?search=${query}`)
            .then(({ data }) => setFestivals(data))
    }

    const searchHandler = (searchFest) => {
        setQuery(searchFest)
    }

    return (
        <aside className='SideBar'>
            <h1>Filters</h1>
            <SearchBar searchHandler={searchHandler} />


        </aside>
    )

}

export default SideBar 