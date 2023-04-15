 ## Stacks utilizada 

- Back-end: Typescript, Node, Moongose, MongoDB, Docker, Express
- Testes: Chai, Mocha, Sinon
- Validadores: Joi

## Rodando o Docker
Rode os serviços api_movies e mongodb com o comando ```docker-compose up -d```.

Lembre-se de parar o mongodb se estiver usando localmente na porta padrão (27017), ou adapte, caso queria fazer uso da aplicação em containers.

:warning: Após subir todos os contêineres, a api já estará rodando na porta 3001, portanto basta apenas usar os endpoints

Esses serviços irão inicializar um container chamado ```api_movies``` e outro chamado ```api_movies_db```. 

A partir daqui você precisa acessar a pasta frontend e rodar o comando ```npm run dev``` 

:warning: Atenção :warning: Caso opte por utilizar o Docker, TODOS os comandos disponíveis no package.json (npm start, npm test, npm run dev, ...) devem ser executados DENTRO do container, ou seja, no terminal que aparece após a execução do comando docker exec citado acima. 

  

:warning: Atenção :warning: O git dentro do container não vem configurado com suas credenciais. Faça os commits fora do container, ou configure as suas credenciais do git dentro do container. 

  

:warning: Atenção :warning: Não rode o comando npm audit fix! Ele atualiza várias dependências do projeto, e essa atualização gera conflitos com o avaliador. 

  

:warning: Atenção :warning: Caso você esteja usando macOS e ao executar o docker-compose up -d se depare com o seguinte erro: 

  

```bash 

The Compose file './docker-compose.yml' is invalid because: 

Unsupported config option for services.db: 'platform' 

Unsupported config option for services.node: 'platform' 

``` 

Foram encontradas 2 possíveis soluções para este problema: 

* Você pode adicionar manualmente a option platform: linux/amd64 no service do banco de dados no arquivo docker-compose.yml do projeto, mas essa é uma solução local e você deverá reproduzir isso para os outros projetos. 

* Você pode adicionar manualmente nos arquivos .bashrc, .zshenv ou .zshrc do seu computador a linha export DOCKER_DEFAULT_PLATFORM=linux/amd64, essa é uma solução global. As soluções foram com base nesta fonte. 

# Rotas Da Api

#### Criar um movie
```http
  POST /movies
```

```
 Sera validado se existe um token no headers e se o usuário é um admin.
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

#### Pegar todos products da loja

```http
  GET /movies
  ```

  | Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `page`      | `number` | **Opcional no req query da rota**.  |


Qualquer duvida entre em contato comigo:

E-mail: felipe14062000@gmail.com

Linkedin: https://www.linkedin.com/in/felipe-pinto-coder/