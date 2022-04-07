import { useState, useEffect } from 'react';
import Movie from './Components/Movie';

function Home() {
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
                        <Movie
                            key={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                            title_long={movie.title_long}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Home;
