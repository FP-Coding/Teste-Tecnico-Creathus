import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header.tsx';

function MovieDetails(props: RouteComponentProps) {
  return (
    <Header {...props} />
  );
}

export default MovieDetails;
