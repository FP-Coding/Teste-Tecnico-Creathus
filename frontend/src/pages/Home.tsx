import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import '../css/Home.css';
import { getRequest } from '../utils/axios';
import { IMovieInfo } from '../interfaces/IMovieInfo';
import MovieCard from '../components/MovieCard';

function Home(props: RouteComponentProps) {
  const [movies, setMovies] = useState<IMovieInfo[]>([]);
  const [numberPage, setNumberPage] = useState(0);

  useEffect(() => {
    const request = async () => {
      const response = await getRequest(`/movies?page=${numberPage}`);
      return setMovies(response);
    };
    request();
  }, [numberPage]);

  const changeBeforePage = () => {
    const newNumberPage = numberPage - 1;
    return newNumberPage < 0 ? setNumberPage(0) : setNumberPage(newNumberPage);
  };

  const changeNextPage = () => setNumberPage(numberPage + 1);

  return (
    <div className="container">
      <Header {...props} />
      <div className="container-movies">
        <h1 className="main-title">Últimos filmes adicionados</h1>
        <div className="button-container">
          <button
            type="button"
            className="button-page"
            onClick={changeBeforePage}
            disabled={numberPage === 0}
          >
            Anterior
          </button>
          <button
            type="button"
            className="button-page"
            onClick={changeNextPage}
            disabled={movies.length < 16}
          >
            Próximo
          </button>
        </div>
        <div className="container-movies-card">
          {movies.map(({ title, image, id }: IMovieInfo) => (
            <MovieCard
              key={id}
              image={image}
              title={title}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
