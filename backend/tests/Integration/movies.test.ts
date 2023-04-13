import  chai from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import chaiHttp from 'chai-http';
import app from '../../src/Api/app';
import { moviesMockResponse } from '../mocks/movies.mock';
const { expect } = chai;

chai.use(chaiHttp);


describe('Teste para rota de filmes', function () {
  afterEach(() => {
    sinon.restore();
  });

  it('SUCESSO - retorna todos os filmes', async function () {
    sinon.stub(Model, 'find').resolves(moviesMockResponse);

    const response = await chai.request(app).get('/movies');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(moviesMockResponse)
  });

  it('SUCESSO - retorna um filme pelo id', async function () {
    sinon.stub(Model, 'findById').resolves(moviesMockResponse[0]);

    const response = await chai.request(app).get('/movies/6437711f0a4b4441b6619f0d');

    expect(response.status).to.be.equal(200);
    expect(response.body).to.be.deep.equal(moviesMockResponse[0])
  });
});