import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header.tsx';
import '../css/Home.css'
import { getRequest } from '../utils/axios.ts';
import { IMovieInfo } from '../interfaces/IMovieInfo.ts';
import MovieCard from '../components/MovieCard.tsx';

function Home(props: RouteComponentProps) {
  const [movies, setMovies] = useState<IMovieInfo[]>([]);
  useEffect(() => {
    const request = async () => {
      const response = await getRequest('/movies');
      return setMovies(response)
    }
    request();
  },[])

  return (
    <div className='container-home'>
      <Header {...props}/>
      <div className='container-movies'>
        <h1 className='main-title'>Últimos filmes adicionados</h1>
        <button
        type='button'
        className='button-page'
        >
          Próximo
        </button>
        <div className='container-movies-card'>
          {movies.map(({ title, image, id }) => <MovieCard key={id} image={image} title={title} />)}
        </div>
      </div>
    </div>
  );
}

export default Home;
