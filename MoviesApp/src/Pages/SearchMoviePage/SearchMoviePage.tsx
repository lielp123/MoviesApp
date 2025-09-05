import { useState, type ChangeEvent, type FC } from 'react';
import './SearchMoviePageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export const SearchMoviePage : FC = () => {

    const [searchValue, setSearchValue] = useState("");

    const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    return (
        <>
            <div id='search-div'>
                <input onChange={handleSearchChange} id='search-movie-input' placeholder='Search Movie' />
                <button id='search-button'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </>
    )
}