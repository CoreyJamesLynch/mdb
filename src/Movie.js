import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => (
	<div>
		<Link to="/test">
			<img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
		</Link>
	</div>
);

export default Movie;

Movie.propTypes = {
	movie: PropTypes.shape({
		title: PropTypes.string.isRequired,
	}).isRequired, // Each prop should either be required or have a default value.
}; // propType for every single prop that is used.
