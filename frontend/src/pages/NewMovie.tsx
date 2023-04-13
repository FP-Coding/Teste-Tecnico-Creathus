import React from 'react';
import Header from '../components/Header.tsx';
import { RouteComponentProps } from 'react-router-dom';

function NewMovie(props: RouteComponentProps) {
  return (
    <>
      <Header {...props}/>
    </>
  );
}

export default NewMovie;
