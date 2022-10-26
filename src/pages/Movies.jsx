import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as Api from '../services/Api';
import Search from 'components/Search/Search';
import MoviesList from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [serch, setSearch] = useSearchParams();
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const queryInput = serch.get('query');

  useEffect(() => {
    if (!query) {
      setSearchMovies([]);
      return;
    }
    fetchQueryOnSearch(query);
  }, [query]);

  useEffect(() => {
    if (queryInput) {
      setQuery(queryInput);
      return;
    }
  }, [queryInput]);

  const handleSubmit = searchQuery => {
    setSearch({ query: searchQuery });
    setQuery(searchQuery);
  };

  async function fetchQueryOnSearch(query) {
    try {
      const res = await Api.getBySearch(query);
      setSearchMovies(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <main>
      <Search onSearch={handleSubmit} />
      {searchMovies.length === 0 && query ? (
        'not findes'
      ) : (
        <>

          <MoviesList movies={searchMovies} />
        </>
      )}
    </main>
  );
};

export default Movies;
