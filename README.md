 ## Stacks utilizada 

- Back-end: Typescript, Node, Moongose, MongoDB, Docker, Express, Joi, Chai, Mocha, Sinon
- Front-end: React, Typescript, Axios, react-router-dom

## Rodando o Docker
<br />
Rode os serviços api_movies e mongodb com o comando ```docker-compose up -d```.

Lembre-se de parar o mongodb se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers.

:warning: Após subir todos os contêineres, a api já estará rodando na porta 3001, portanto basta apenas usar os endpoints

Esses serviços irão inicializar um container chamado ```api_movies``` e outro chamado ```api_movies_db```. 

A partir daqui você precisa acessar a pasta frontend e rodar o comando ```npm run dev``` 

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador. 

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro: 

```bash 

The Compose file './docker-compose.yml' is invalid because: 

Unsupported config option for services.db: 'platform' 

Unsupported config option for services.node: 'platform' 

``` 

Foram encontradas 2 possíveis soluções para este problema: 

* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local. 

* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. 

# Rotas Da Api
<br/>
#### Criar um movie
```http
  POST /movies
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `author` | `string` | **Obrigatório no body**. |
| `title` | `string` | **Obrigatório no body**. |
| `description` | `string` | **Obrigatório no body**. |
| `image` | `string` | **Obrigatório no body**. |

#### Buscar movie por ID

```http
  GET /movies/:id <--(Precisa ser um id mongoID valido)
  ```
| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório no params da rota**.  |

#### Pegar todos os movies cadastrados

```http
  GET /movies?page=0
  ```

  | Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `page`      | `number` | **Opcional no req query da rota**.  |


# Rotas Da Aplicação Front-end
<br/>

```http
  /
  ```
Página home que traz todos os filmes cadastrados limitados a 16 por página.

```http
  /novo-filme
  ```
Página que traz um formulário para adição de um novo filme.

```http
  /:id/detalhes
  ```
Página que traz os detalhes de um filme com a imagem do poster e a sinopse.

<br />

Qualquer duvida entre em contato comigo:

Link do deploy no railway: https://uptight-deer-production.up.railway.app/

E-mail: felipe14062000@gmail.com

Linkedin: https://www.linkedin.com/in/felipe-pinto-coder/
