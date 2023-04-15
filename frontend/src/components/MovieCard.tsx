import React from 'react';
import '../css/MovieCard.css';
import { Link } from 'react-router-dom';
import IMovieCardProps from '../interfaces/IMovieCardProps';

function MovieCard({ image, title, id }: IMovieCardProps) {
  return (
    <div className="container-movie-card">
      <Link to={`/${id}/detalhes`}>
        <img src={image} alt={title} className="image-movie" />
        <p className="name-movie">{ title }</p>
      </Link>
    </div>
  );
}

export default MovieCard;
