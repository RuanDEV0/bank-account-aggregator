# Projeto de API de Agregação de Contas Bancárias

Este projeto é uma API de agregação de contas bancárias em múltiplas instituições financeiras, realizando operações de saldo e extrato, simulando a .

## Pré-requisitos

Antes de rodar a aplicação, verifique se você tem as seguintes ferramentas instaladas:

- [Docker](https://www.docker.com/) e [Docker Compose](https://docs.docker.com/compose/)

## Configuração do Ambiente

1. Clone o repositório:

   ```bash
   git clone https://github.com/RuanDEV0/bank-account-aggregator.git
   cd bank-account-aggregator

2. Criar o arquivo `.env` na raiz do projeto:
   ```bash
   #Configure a Porta do Servidor da API
    PORTSERVER=XXXX

    # Configurações do PostgreSQL
      POSTGRES_USER=you_username
      POSTGRES_PASSWORD=you_password
      POSTGRES_DB=open-finance

    # Configurações de banco de dados para conexão com API
      DB_USERNAME=you_db_username
      DB_PASSWORD=you_db_password

    # Token de autenticação JWT, definir um MD5 Hash 
      hash_token=xxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyy

  - Link do [`.env-model`](https://github.com/RuanDEV0/bank-account-aggregator/blob/main/.env-model)
  - Link do [MD5 HASH GENERATOR](https://www.md5hashgenerator.com/)
  
## Executando a aplicação:

1. Rodando a aplicação com Docker:
   -  No terminal, dentro da pasta do projeto, execute o seguinte comando:
      - Se estiver usando o Docker Compose v1
         ```bash
        docker-compose up --build

      - Se estiver usando o Docker Compose v2
         ```bash
        docker compose up --build

  Isso irá construir as imagens necessárias e subir os containers para o banco de dados e para a aplicação.

2. Acessar a aplicação:
Após os containers estarem rodando, você pode acessar a aplicação no navegador ou em ferramentas como o [Postman](https://www.postman.com/downloads/), utilizando a URL `http://localhost:3333`.

## Recursos de cada Rota

