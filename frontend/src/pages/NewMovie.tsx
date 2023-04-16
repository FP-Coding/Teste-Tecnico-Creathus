import React, { ChangeEvent, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Header from '../components/Header';
import '../css/NewMovie.css';
import baseImage from '../utils/baseImage';
import ICreateMovieInfo from '../interfaces/IMovieInfo';
import { postRequest } from '../utils/axios';
import IErrorRequest from '../interfaces/IErrorRequest';

function NewMovie(props: RouteComponentProps) {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isFilled, setIsFilled] = useState(false);

  useEffect(() => {
    const fields = [];
    if (author.length < 2) fields.push('Autor');
    if (title.length < 2) fields.push('Título');
    if (description.length < 20) fields.push('Descrição');
    if (image.length < 5) fields.push('Imagem');

    if (fields.length > 0) {
      setIsFilled(false);
      return setErrorMessage(`Os valores dos campos de: ${fields.join(', ')} faltam ser preenchidos ou estão inválidos`);
    }
    setErrorMessage('');
    return setIsFilled(true);
  }, [author, title, description, image]);

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
      const err = error as IErrorRequest;
      return window.alert(err?.response?.data?.message || 'Internal error');
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
          <p>{errorMessage}</p>
          <div>
            <div className="button-container-form">
              <button
                type="button"
                className="button-base button-post button"
                onClick={createMovie}
                disabled={isFilled === false}
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
