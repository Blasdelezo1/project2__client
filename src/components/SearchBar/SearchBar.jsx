import './SearchBar.css'
import { useState } from 'react'
import { Form } from 'react-bootstrap'

const SearchBar = ({ searchHandler }) => {

    const [searchFest, setSearchFest] = useState('')

    const handleSearch = (e) => {

        setSearchFest(e.target.value)
        searchHandler(e.target.value)
    }


    return (
        <div className='SearchBar'>
            <input
                type='text'
                placeholder='Type Here...'
                value={searchFest}
                onChange={handleSearch}
            />
        </div>


    )
}

export default SearchBar