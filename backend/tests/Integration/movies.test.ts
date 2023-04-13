import  chai from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/Api/app';
import { 
  createMovieInfoMock, 
  createMovieInfoMockInvalid, 
  moviesMockResponse 
} from '../mocks/movies.mock';
const { expect } = chai;

chai.use(chaiHttp);


describe('Teste para rota de filmes', function () {
  afterEach(() => {
    sinon.restore();
  });

  // it('SUCESSO - retorna todos os filmes', async function () {
  //   sinon.stub(Model, 'find').resolves(moviesMockResponse);

  //   const response = await chai.request(app).get('/movies');

  //   expect(response.status).to.be.equal(200);
  //   expect(response.body).to.be.deep.equal(moviesMockResponse)
  // });

  it('SUCESSO - retorna um filme pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(moviesMockResponse[0]);

    const response = await chai.request(app).get('/movies/6437711f0a4b4441b6619f0d');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(moviesMockResponse[0])
  });

  it('SUCESSO - ao passar dados válidos um novo filme é criado', async function () {
    sinon.stub(Model, 'findOne').resolves(undefined);
    sinon.stub(Model, 'create').resolves(moviesMockResponse[0]);

    const response = await chai.request(app).post('/movies').send(createMovieInfoMock);

    expect(response.status).to.be.equal(201);
    expect(response.body).to.be.deep.equal(moviesMockResponse[0])
  });

  it('Falha - ao buscar um filme passar um id fora do formato', async function () {
    const response = await chai.request(app).get('/movies/1');

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.deep.equal({ message: 'Invalid id' })
  });

  it('Falha - ao buscar um filme pelo id passar um id inexistente', async function () {
    sinon.stub(Model, 'findById').resolves(undefined);

    const response = await chai.request(app).get('/movies/6437711f0a4b4441b6619f0f');

    expect(response.status).to.be.equal(404);
    expect(response.body).to.be.deep.equal({ message: 'Movie not found' })
  });

  it('Falha - ao tentar criar um filme valores faltando', async function () {
    const response = await chai.request(app).post('/movies').send(createMovieInfoMockInvalid);

    expect(response.status).to.be.equal(422);
    expect(response.body).to.be.deep.equal({ message: '"Author" is not allowed to be empty' })
  });

  it('Falha - ao tentar criar um filme valores faltando', async function () {
    sinon.stub(Model, 'findOne').resolves(moviesMockResponse[0]);

    const response = await chai.request(app).post('/movies').send(createMovieInfoMock);

    expect(response.status).to.be.equal(409);
    expect(response.body).to.be.deep.equal({ message: 'This film is already registered' })
  });
});