import { useState, useEffect } from 'react';
import { NavLink, Outlet, useParams, useLocation } from 'react-router-dom';
import * as Api from '../../services/Api';
// import PropTypes from 'prop-types';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  const { state } = useLocation();
  const backHref = state?.from ?? '/';

  const { original_title, poster_path, vote_average, overview, genres } = movie;

  useEffect(() => {
    async function getMovie(movieId) {
      try {
        const data = await Api.getMovieById(movieId);
        setMovie(data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie(movieId);
  }, [movieId]);

  return (
    <>
      <NavLink
        to={backHref}
        style={{ display: 'inline-block', marginBottom: '10px' }}
      >
        &larr; Go to back
      </NavLink>
      <div style={{ borderBottom: '1px solid black', paddingBottom: '15px' }}>
        {poster_path !== null ? (
          <img
            src={`${Api.IMG_PATH}${poster_path}`}
            alt={original_title}
            width="200"
          />
        ) : (
          <img src={`${Api.noPicture}`} alt={original_title} width="200" />
        )}

        <div>
          <h2>{original_title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          {genres === undefined
            ? 'No genres'
            : `${genres.map(genre => genre.name).join(', ')}.`}
        </div>
      </div>
      <div style={{ borderBottom: '1px solid black', padding: '15px 0' }}>
        <b>Addition information</b>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
          <Outlet />
        </ul>
      </div>
    </>
  );
};
export default MovieDetails;
