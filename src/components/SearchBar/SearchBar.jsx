import './SearchBar.css'

import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const SearchBar = ({ searchHandler }) => {

    const handleSearch = (e) => {
        searchHandler(e.target.value)
    }

    // TODO: COMPONETIZAR CON BS
    return (
        <div className='SearchBar'>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">🕵</InputGroup.Text>
                <Form.Control

                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type='text'
                    placeholder='Type Here...'
                    onChange={handleSearch}
                />
            </InputGroup>
        </div>
    )
}

export default SearchBar

//     < input
// type = 'text'
// placeholder = 'Type Here...'
// onChange = { handleSearch }
//     />