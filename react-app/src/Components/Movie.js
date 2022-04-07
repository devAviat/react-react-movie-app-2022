import PropType from 'prop-types';

function Movie({ key, coverImg, title, summary, genres, title_long }) {
    return (
        <div>
            <img src={coverImg} alt={title_long} />
            <h2>{title}</h2>
            <p>{summary}</p>
            <ul>
                {genres.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.prototype = {
    coverImg: PropType.string.isRequired,
    title: PropType.string.isRequired,
    summary: PropType.string.isRequired,
    genres: PropType.arrayOf(PropType.string).isRequired,
};

export default Movie;
