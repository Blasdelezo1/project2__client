import { Form, InputGroup } from 'react-bootstrap'

import './SearchBar.css'

const SearchBar = ({ searchHandler }) => {

    const handleSearch = (e) => {
        searchHandler(e.target.value)
    }

    return (

        <InputGroup className="SearchBar">
            <InputGroup.Text id="basic-addon1">🕵</InputGroup.Text>
            <Form.Control
                aria-label="Username"
                aria-describedby="basic-addon1"
                type='text'
                placeholder='Search...'
                onChange={handleSearch}
            />
        </InputGroup>
    )
}

export default SearchBar

