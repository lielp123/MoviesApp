import { type JSX, useState, type FC, useRef } from 'react';
import './SearchMoviePageStyle.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { ResultDiv } from '../../ResultDiv/ResultDiv';

export const SearchMoviePage : FC = () => {

    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSearch = () => {
        setSearchValue(inputRef.current!.value)  
        console.log(inputRef.current?.value); 
    }

    return (
        <>

            <div id='main-div'>
                <div id='search-div'>
                    <input ref={inputRef} id='search-movie-input' placeholder='Search Movie' />
                    <button onClick={handleSearch} id='search-button'>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
                {searchValue &&
                    <ResultDiv search={searchValue} />
                }
            </div>
            
        </>
    )
}