import { useState, useEffect } from 'react';

function App() {
    const [loading, setLoading] = useState(true);
    const [movies, setMoives] = useState([]);
    const getMoives = async () => {
        const json = await (
            await fetch(
                'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            )
        ).json();
        setMoives(json.data.movies);
        setLoading(false);
    };

    useEffect(() => {
        getMoives();
    }, []);
    console.log(movies);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {movies.map((movie, index) => (
                        <div key={index}>
                            <img
                                src={movie.medium_cover_image}
                                alt={movie.title_long}
                            />
                            <h2>{movie.title}</h2>
                            <p>{movie.summary}</p>
                            <ul>
                                {movie.genres.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default App;
