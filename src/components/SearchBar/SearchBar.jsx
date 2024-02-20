import './SearchBar.css'
import { useState } from 'react'

const SearchBar = ({ searchHandler }) => {

    const [searchFest, setSearchFest] = useState('')

    const handleSearch = (e) => {

        setSearchFest(e.target.value)
        searchHandler(e.target.value)
    }


    return (

        <input className='SearchBar'
            type='text'
            placeholder='Type Here...'
            value={searchFest}
            onChange={handleSearch}
        >
        </input>
    )
}

export default SearchBar