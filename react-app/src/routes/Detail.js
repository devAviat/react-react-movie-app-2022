import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movieDetail, setMovieDetail] = useState();
    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json.data.movie);
        setMovieDetail(json.data.movie);
        setLoading(false);
    };

    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
            <h1>{movieDetail.id}</h1>
        </div>
    );
}
export default Detail;
