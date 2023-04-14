import React, { ChangeEvent, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
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
  const [image, setImage] = useState(baseImage);

  const handleImageFile = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const imageFile = target.files?.[0];
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageBase64 = reader.result?.toString() || '';
        setImage(imageBase64);
      };
      reader.readAsDataURL(imageFile);
    }
  };

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
      return window.alert(err.response.data.message);
    }
  };

  return (
    <div className="container">
      <Header {...props} />
      <div className="preview-container">
        <img src={image} alt="" className="preview-image" />
        <form className="form-newmovie">
          <label htmlFor="author-input" className="label-form container-input">
            Autor
            <input
              type="text"
              id="author-input"
              className="input-form"
              onChange={({ target }) => setAuthor(target.value)}
              value={author}
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
            />
          </label>
          <div>
            <input type="file" onChange={handleImageFile} />
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
