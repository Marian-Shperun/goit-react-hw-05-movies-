import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as Api from '../../services/Api';
export const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    async function getMovie(movieId) {
      try {
        const data = await Api.getCasts(movieId);
        setCast(data);
      } catch (e) {
        console.log(e);
      }
    }
    getMovie(movieId);
  }, [movieId]);

  return (
    <ol>
      {cast.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          {profile_path === null ? (
            <img
              src={`${Api.noPicture}`}
              alt={name}
              width="100"
              style={{ marginRight: '10px' }}
            />
          ) : (
            <img
              src={`${Api.IMG_PATH}${profile_path}`}
              alt={name}
              width="100"
              style={{ marginRight: '10px' }}
            />
          )}

          {name}
          <p>Character: {character}</p>
        </li>
      ))}
    </ol>
  );
};
