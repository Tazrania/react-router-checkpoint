import { useState } from 'react';

const Filter = ({ onFilter }) => {
const [title, setTitle] = useState('');
const [rating, setRating] = useState('');

const handleTitleChange = (event) => {
    setTitle(event.target.value);
};

const handleRatingChange = (event) => {
    setRating(event.target.value);
};

const handleFilter = () => {
    onFilter({ title, rating });
};

return (
    <div className="filter">
    <input
        type="text"
        placeholder="Filter by title"
        value={title}
        onChange={handleTitleChange}
    />
    <input
        type="number"
        min="0"
        max="10"
        placeholder="Filter by rating"
        value={rating}
        onChange={handleRatingChange}
    />
    <button onClick={handleFilter}>Search</button>
    </div>
);
};

export default Filter;
