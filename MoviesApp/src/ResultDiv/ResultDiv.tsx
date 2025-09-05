import { useEffect, useState, type FC } from 'react';
import './ResultDivStyle.css';

interface ResultDivProps {
    search : string;
}

const URL = "https://www.omdbapi.com/?apikey=ab369e26";

export const ResultDiv : FC<ResultDivProps> = (props) => {

    const [result, setResult] = useState<any>();
    const [err, setError] = useState("");

    useEffect(() => {
        const loadResult = async () => {
            const res = await fetch(`${URL}&t=${props.search}`);
            const json = await res.json();
            console.log(json);
            if(json) {
                setError("Unable to find movie: " + props.search);
            }
            setResult(json);
        }

        loadResult();
    }, [props.search])

    return (
        <div id='result-div'>
            
            {(result && result["Response"] == "True") ?
                
            <div className='main-result-div'>
                <div className='poster-and-ratings-div'>
                    <img src={result["Poster"]} className='poster'/>    
                    <div className='ratings-div'>
                        <div className='rating-and-logo'>
                            <img className='icon' src={'/IMDB.png'} />
                            {result["Ratings"][0] ?
                                <p className='rating'>{result["Ratings"][0]["Value"]}</p> : "N/A"
                            }
                        </div>
                        <div className='rating-and-logo' >
                            <img className='icon' src={'/RottenTomatoes.png'} />
                            {result["Ratings"][1] ?
                                <p className='rating'>{result["Ratings"][1]["Value"]}</p> : "N/A"
                            }
                        </div>
                        <div className='rating-and-logo'>
                            <img className='icon' src={'/Metacritics.png'} />
                            {result["Ratings"][2] ?
                                <p className='rating'>{result["Ratings"][2]["Value"]}</p> : "N/A"
                            }
                        </div>
                    </div>
                </div>
                <div className='text-div'>
                    <h2>{`${result["Title"]} (${result["Year"]})`}</h2>
                    <p>{result["Plot"]}</p>
                    <p className='director'><strong>Director:</strong> {result["Director"]}</p>
                </div>    
            </div> : <h2>{result["Error"]}</h2>
            }
            

            
        </div>
    )
}