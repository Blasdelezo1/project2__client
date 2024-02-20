import './SideBar.css'
import SearchBar from '../SearchBar/SearchBar'

import { NavLink } from 'react-router-dom'


const SideBar = ({ onSearch }) => {


    return (
        <aside className='SideBar'>
            <h1>Filters</h1>
            <SearchBar onSearch={onSearch} />


        </aside>
    )

}

export default SideBar 