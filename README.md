# 💰 Bank Account Aggregator

Aplicação Node.js com PostgreSQL para agregação de contas bancárias e transações.

---

## 🚀 Como rodar o projeto com Docker

### ✅ Pré-requisitos

- [Git](https://git-scm.com/downloads)
- [Docker](https://www.docker.com/get-started/)

---

### 🧑‍💻 Passo a passo

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/RuanDEV0/bank-account-aggregator.git
    cd bank-account-aggregator 
---

2. **Configuração do Ambiente:**
- Crie um Arquivo `.env` na raiz do projeto, definindo as sequintes variáveis:
    ```bash
    # Configurações do PostgreSQL (container)

    POSTGRES_USER=seu_username
    POSTGRES_PASSWORD=seu_password
    POSTGRES_DB=nome-do-banco

    # Credenciais da API para o Sequelize se conectar ao banco

    DB_NAME=nome-do-banco
    DB_USERNAME=nome_usuário_banco
    DB_PASSWORD=senha_usuário_banco

    # Porta do servidor da API

    PORTSERVER=XXXX

    # Token de autenticação JWT (use um hash MD5 aleatório)

    hash_token=xxxxxxxxxxxxxxxyyyyyyyyyyyyyyyyy


 - [Modelo do Arquivo](https://github.com/RuanDEV0/bank-account-aggregator/blob/main/.env-model) `.env`
 - [MD5 HASH GENERATOR](https://www.md5hashgenerator.com/)

---

3. **🐳 Rodando com Docker** 

Dentro da pasta do projeto no terminal, execute:

  - Docker Compose v2 (Recomendado)
    ```bash
    docker compose up --build
  - Ou Docker Compose v1
    ```bash
    docker-compose up --build

Esse comando irá:

   - Baixar e configurar o PostgreSQL

   - Construir e iniciar a aplicação

   - Executar as migrations automaticamente

   - Deixar a API disponível na porta definida em PORTSERVER, exemplo: Se for definido a PORTSERVER=3000, resulta em (http://localhost:3000)

⚠️ Atenção:

Assim, quem estiver rodando o projeto pela primeira vez, **não precisa se preocupar**.

Entretando, quando já rodou o projeto antes e: 
   - Mudou a senha do banco no .env ou docker-compose.yml.
   - Mudou o nome do banco ou do usuário.

Quando o banco está com problemas de conexão/autenticação por conta de dados antigos persistidos.

**É Recomendado** diante destes contextos:
Na pasta do projeto no terminal, executar:
- Comando: 
  ```bash
    docker compose down -v

# **📡 Recursos da API**

## 🔒 Autenticação
- Formato para Método *POST '/users'*
  ```json
  {
    "email": "testando@gmail.com",
    "password": "testando@gmail.com"
  }
- Resposta:
  ```json
  {
    "user": { 
      "id": 1, 
      "name": 
      "Fulano" 
      },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
## 👥 Usuários

| Método | Endpoint               | Descrição                  | Parâmetros                     | Autenticação |
|--------|------------------------|----------------------------|--------------------------------|--------------|
| `GET`  | `/users`               | Lista todos os usuários    | -                              | Não          |
| `POST` | `/users`               | Cria novo usuário          | `name`, `email`, `password`, `cpf` | Não       |
| `PUT`  | `/users/:id`           | Atualiza dados do usuário  | `name`, `email`, `cpf`         | Sim          |
| `GET`  | `/users/:id/balance`   | Consulta saldo             | `institution` (opcional)       | Sim          |
| `GET`  | `/users/:id/statement` | Extrato de transações      | `institution`, `type` (opcionais) | Sim      |

- Formato para Método *POST  '/users'*:
  - Body:
     ```json
    {
      "name": "test",
      "email": "test@gmail.com",
      "password": "testando",
      "cpf": 1234567891
    }
## 🏦 Instituições

| Método | Endpoint          | Descrição                     | Parâmetros                     | Autenticação |
|--------|-------------------|-------------------------------|--------------------------------|--------------|
| `GET`  | `/institutions`   | Lista instituições cadastradas | -                              | Não          |
| `POST` | `/institutions`   | Cadastra nova instituição      | `name`, `phone`, `cnpj`, `email` | Sim       |

- Formato para Método POST  *'/institutions'*:
  - Body:
     ```json
    {
      "name": "Banco",
      "email": "Banco@gmail.com",
      "cnpj": "12345600",
      "phone": "55-9999999"
    }
## 💳 Contas Bancárias

| Método | Endpoint                   | Descrição             | Parâmetros                  | Autenticação |
|--------|----------------------------|-----------------------|-----------------------------|--------------|
| `GET`  | `/accounts`                | Lista todas as contas | -                           | Sim          |
| `GET`  | `/users/:id/accounts`      | Contas de um usuário  | -                           | Sim          |
| `POST` | `/users/:id/accounts`      | Cria nova conta       | `institution_id`, `balance` | Sim          |

- Formato para Método POST  *'/users/:id/accounts'*:
  - Body:
     ```json
    {
      "institution_id": 1,
      "balance": 2500
    }

## 💸 Transações

| Método | Endpoint                   | Descrição               | Parâmetros                                | Autenticação |
|--------|----------------------------|-------------------------|-------------------------------------------|--------------|
| `POST` | `/users/:id/transactions`  | Registra nova transação | `account_id`, `amount`, `type`, `description` | Sim       |

### Tipos de Transação:
- `credit` (Entrada)
- `debit` (Saída)
  
#### Formato para Método POST *'/users/:id/transactions'*:
  - Body:
     ```json
    {
      "account_id": 1,
      "amount": 500,
      "type": "debit",
      "description": "Pagar Conta De Algo"
    }
 # **🧹 Finalizando a API**
   - Parar os containers:
      ```bash
      docker compose down
