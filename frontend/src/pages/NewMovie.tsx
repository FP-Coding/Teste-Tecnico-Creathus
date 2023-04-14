import React, { ChangeEvent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { AxiosError } from 'axios';
import Header from '../components/Header.tsx';
import '../css/NewMovie.css';
import baseImage from '../utils/baseImage.ts';
import ICreateMovieInfo from '../interfaces/IMovieInfo.ts';
import { postRequest } from '../utils/axios.ts';
import IErrorRequest from '../interfaces/IErrorRequest.ts';

function NewMovie(props: RouteComponentProps) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const resetForm = () => {
    setAuthor('');
    setTitle('');
    setDescription('');
    return setImage(baseImage);
  };

  const createMovie = async () => {
    const infoMovie: ICreateMovieInfo = {
      author,
      title,
      description,
      image,
    };
    try {
      await postRequest('/movies', infoMovie);
      window.alert('Filme criado com sucesso');
      return resetForm();
    } catch (error) {
      if (error instanceof AxiosError) {
        return window.alert(error.message);
      }
      const err = error as IErrorRequest;
      return window.alert(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <Header {...props} />
      <div className="preview-container">
        <img src={image || baseImage} alt="Imagem do filme" className="preview-image" />
        <form className="form-newmovie">
          <label htmlFor="author-input" className="label-form container-input">
            Autor
            <input
              type="text"
              id="author-input"
              className="input-form"
              onChange={({ target }) => setAuthor(target.value)}
              value={author}
              placeholder="Stan Lee"
            />
          </label>
          <label htmlFor="title-input" className="label-form container-input">
            Título
            <input
              type="text"
              id="title-input"
              className="input-form"
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setTitle(target.value)}
              value={title}
              placeholder="Iron Man"
            />
          </label>
          <label htmlFor="description-textarea" className="label-form container-input">
            Descrição
            <textarea
              id="description-textarea"
              className="input-form"
              rows={4}
              value={description}
              onChange={(
                { target }: ChangeEvent<HTMLTextAreaElement>,
              ) => setDescription(target.value)}
              placeholder="Escreva a sinopse do filme"
            />
          </label>
          <label htmlFor="title-input" className="label-form container-input">
            Link Imagem
            <input
              type="text"
              id="title-input"
              className="input-form"
              onChange={({ target }: ChangeEvent<HTMLInputElement>) => setImage(target.value)}
              placeholder="Digite a URL de uma imagem"
              value={image}
            />
          </label>
          <div>
            <div className="button-container-form">
              <button
                type="button"
                className="button-base button-post button"
                onClick={createMovie}
              >
                Postar
              </button>
              <button
                type="button"
                className="button-base button-cancel button"
                onClick={resetForm}
              >
                Cancelar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewMovie;
