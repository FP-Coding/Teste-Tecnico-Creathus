import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { getRequest } from '../utils/axios.ts';
import { IMovieId, IMovieInfo } from '../interfaces/IMovieInfo.ts';
import HeaderDetails from '../components/HeaderDetails.tsx';
import '../css/MovieDetails.css';

function MovieDetails(props: RouteComponentProps) {
  const [movie, setMovie] = useState<IMovieInfo>({
    author: '', description: '', image: '', title: '', id: '',
  });
  const { match: { params } } = props;
  const { id } = params as IMovieId;
  useEffect(() => {
    const request = async () => {
      const response = await getRequest(`/movies/${id}`);
      return setMovie(response);
    };
    request();
  }, []);

  return (
    <div>
      <HeaderDetails />
      <div className="container-movie-details">
        <div className="container-main-info-movie">
          <div className="container-image">
            <img src={movie.image} alt="imagem do filme" className="image-details" />
          </div>
          <h1 className="title-movie-details">{movie.title}</h1>
        </div>
        <div className="info-movie">
          <h3>SINOPSE & INFO</h3>
          <p className="sinopse-movie">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
