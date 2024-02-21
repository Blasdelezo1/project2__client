import './SearchBar.css'
import { Form } from 'react-bootstrap'

const SearchBar = ({ searchHandler }) => {

    const handleSearch = (e) => {
        searchHandler(e.target.value)
    }

    // TODO: COMPONETIZAR CON BS
    return (
        <div className='SearchBar'>
            <input
                type='text'
                placeholder='Type Here...'
                onChange={handleSearch}
            />
        </div>
    )
}

export default SearchBar