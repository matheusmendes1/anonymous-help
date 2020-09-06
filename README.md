# Anonymous Help

Bem vindo ao Anonymous Help! Este é, a primeiro momento, o protótipo do trabalho que será apresentado na disciplina GSI003 da UFU. Anonymous Help é uma espécie de rede social onde pessoas com problemas no seu dia-a-dia podem relatar suas angústias anonimamente, assim, outras pessoas dispostas a ajudar, também anonimamente, poderiam oferecer palavras de conforto e apoio a estas pessoas sofrendo.

## Getting Started

Colocando a mão na massa, assim que você clonar o repositório, alguns pré-requisitos devem constar no seu ambiente de desenvolvimento. Vamos listá-los abaixo. Lembre-se que com todos eles instalados, você deverá rodar o comando "yarn" no terminal apontando para o diretório da aplicação para rodar as dependências e rodar "yarn typeorm migration:run" para que as migrations sejam criadas e assim, as tabelas sejam criadas no seu banco de dados.

## Main Technologies

* Javascript
* HTML
* CSS
* Typescript
* NodeJS
* PostgresSQL
* ReactJS

### Prerequisites

Aqui estão os softwares necessários e recomendados para prosseguir com o uso da aplicação:

* [Nodejs](https://nodejs.org/en/)
* [Yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
* [Docker](https://docs.docker.com/docker-for-windows/install/)
* [Insomnia Core](https://insomnia.rest/download/#windows)
* [DBeaver](https://dbeaver.io/download/)

### Instalations

#### Docker

* Execute 'docker run --name anonymous_help -e POSTGRES_PASSWORD=anhelp -p 5432:5432 -d postgres' no terminal para criar o container do docker que será usado para manipular o banco de dados

##### Considerations about Docker

* docker ps: shows the containers that are running
* docker ps -a: list all available containers
* After the docker / machine is turned off, the container turns off
  * To run the container again, use docker start <container_id | container_name>

#### DBeaver

* Inside Dbeaver, click on "new connection"
  * Host: localhost
  * Port: 5432 (same as the container)
  * Database: postgres (defaul name)
  * Username: same as the container
  * Senha: same as the container
  * Na aba PostgreSQL: check 'show all databases'
* Create a new database to this connection

## Considerations about Backend with NodeJS
#### Dentre as bibliotecas usadas no projeto, podemos listar

* Express

* Express is the most popular Node web framework, and is the underlying library for a number of other popular Node web frameworks. It provides mechanisms to:
  * Write handlers for requests with different HTTP verbs at different URL paths (routes).
  * Integrate with "view" rendering engines in order to generate responses by inserting data into templates.
  * Set common web application settings like the port to use for connecting, and the location of templates that are used for rendering the response.
  * Add additional request processing "middleware" at any point within the request handling pipeline.

* TypeORM
  * Usado com o conceito de migrations, ele serve, no projeto, para criar as tabelas, manipular os models e outras funcionalidades pertinentes ao banco de dados.

* UUIDV4
  * Usado para prover id's válidos e tem algumas funções para manipular eles

* BCRYPTJS
  * Usado para criptografia das senhas quando for salvar dados no banco

* JSONWEBTOKEN
  * Usado para manipular os JWT tokens (Autenticação)
  * Obs: o token (o valor em si) é separado em 3 partes, você pode observar mais em [JWT io](https://jwt.io/)

* MULTER
  * Usado para tratar upload de arquivos

## Considerations about Frontend with ReactJS

## Rodapé

* Misturei inglês com português mas you are bilingual so you will entender :D
* Projeto, até então, puramente acadêmico.
* Toda e qualquer biblioteca e/ou tecnologia tem sua documentação, LEIA ELA QUANDO TIVER DÚVIDA
