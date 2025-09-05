import { useState, type ChangeEvent, type FC } from 'react';
import './SearchMoviePageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export const SearchMoviePage : FC = () => {

    const [searchValue, setSearchValue] = useState("");

    const navigator = useNavigate();

    const handleSearchChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        navigator(`/movie/:${searchValue}`);
    }

    return (
        <>
            <div id='search-div'>
                <input onChange={handleSearchChange} id='search-movie-input' placeholder='Search Movie' />
                <button onClick={handleSearch} id='search-button'>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
            </div>
        </>
    )
}