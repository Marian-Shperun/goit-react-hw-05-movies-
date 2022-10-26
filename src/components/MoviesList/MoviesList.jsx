import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// import MovieDetails from '../MovieDetails/MovieDetails';
import { UlMovies, LiMovies, NavLinkStyle } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location =useLocation()
  return (
    <UlMovies>
      {movies.map(({ id, title }) => {
        return (
          <LiMovies key={id}>
            <NavLinkStyle to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </NavLinkStyle>
            <Outlet />
          </LiMovies>
        );
      })}
    </UlMovies>
  );
};
export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
