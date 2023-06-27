import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
const { title, description, posterURL, rating, link } = movie;

return (
    <Link to={link} className="movieCard">
    <img src={posterURL} alt={title} />
    <p>{title}</p>
    <p>{description}</p>
    <p>Rating: {rating}</p>
    </Link>
);
};

export default MovieCard;
