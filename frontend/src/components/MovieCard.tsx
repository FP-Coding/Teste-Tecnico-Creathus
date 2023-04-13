import React from 'react';
import '../css/MovieCard.css';
import IMovieCardProps from '../interfaces/IMovieCardProps';


function MovieCard({ image, title }: IMovieCardProps) {
  return (
    <div className="container-movie-card">
      <img src={image} alt={title} className='image-movie'/>
      <p className='name-movie'>{ title }</p>
    </div>
  );
}

export default MovieCard;
