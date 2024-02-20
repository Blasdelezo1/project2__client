import './SearchBar.css'
import { useState } from 'react'

const SearchBar = (onSearch) => {

    const [searchBar, setSearchBar] = useState('')

    const handleChange = (e) => {

        setSearchBar(e.target.value)
        onSearch(e.target.value)
    }


    return (

        <input className='SearchBar'
            type='text'
            placeholder='Type Here...'
            value={searchBar}
            onChange={handleChange}
        >
        </input>
    )
}

export default SearchBar