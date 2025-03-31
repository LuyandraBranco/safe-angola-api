# SafeAngola API

SafeAngola é uma API desenvolvida com **NestJS** para gerenciar detecção e alertas de acidentes rodoviários. A aplicação utiliza **PostgreSQL** como banco de dados e segue padrões como **Clean Architecture** e **Arquitetura Hexagonal**.

## 📌 Tecnologias Utilizadas

- **NestJS** - Framework Node.js para aplicações escaláveis
- **PostgreSQL** - Banco de dados relacional
- **Prisma ORM** - Gerenciamento de banco de dados
- **Docker** - Contêineres para ambiente isolado
- **Arquitetura Hexagonal** - Modularização e separação de responsabilidades
- **Clean Architecture** - Código desacoplado e testável

---

## 🚀 Como Executar a API

### **1️⃣ Pré-requisitos**

Certifique-se de ter instalado:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)
- [Node.js](https://nodejs.org/en/) (se quiser rodar sem Docker)

### **2️⃣ Configurar Variáveis de Ambiente**

Crie um arquivo `.env` na raiz do projeto e adicione:

```env
DATABASE_URL=postgresql://admin:secret@db:5432/safeangola
PORT=3000
JWT_SECRET=seu_segredo_aqui
```

### **3️⃣ Rodando com Docker**

Para subir a API e o banco de dados com Docker, execute:

```sh
docker compose up -d
```

Isso iniciará o PostgreSQL e a API na porta `3000`.

### **4️⃣ Rodando sem Docker**

Caso prefira rodar localmente:

```sh
npm install  # Instala as dependências
npm run prisma:migrate  # Executa as migrações do banco de dados
npm run start:dev  # Inicia a API em modo de desenvolvimento
```

---

## 🏗 Arquitetura do Projeto

O projeto segue a **Clean Architecture** e a **Arquitetura Hexagonal**, garantindo modularidade e testabilidade.

### 📂 Estrutura de Pastas

```
📦 safeangola-api
 ┣ 📂 src
 ┃ ┣ 📂 application  # Casos de uso e regras de negócio
 ┃ ┣ 📂 domain  # Entidades e contratos da aplicação
 ┃ ┣ 📂 infra  # Implementação de repositórios, serviços externos e banco de dados
 ┃ ┣ 📂 interface  # Controladores e gateways de comunicação (REST, GraphQL, etc.)
 ┃ ┣ 📂 modules  # Módulos do NestJS para organização da aplicação
 ┣ 📂 prisma  # Definição do schema do banco de dados
 ┣ 📂 test  # Testes unitários e e2e
 ┗ 📜 docker-compose.yml  # Configuração do Docker
```

### 🛠 Explicação das Camadas

- **Application**: Contém os **casos de uso**, onde a lógica de negócio é aplicada sem depender de detalhes da infraestrutura.
- **Domain**: Define as **entidades** e **contratos** principais, garantindo que o núcleo da aplicação esteja bem estruturado.
- **Infra**: Implementação de **repositórios**, comunicação com bancos de dados e serviços externos.
- **Interface**: Responsável pela **comunicação externa**, incluindo **controllers** e **gateways** REST, GraphQL, etc.
- **Modules**: Organização dos módulos dentro do NestJS, garantindo separação e modularidade.

---

## 🛠 Endpoints Disponíveis

### 🔑 **Autenticação**

- `POST /auth/register` - Cria um novo usuário
- `POST /auth/login` - Autentica um usuário e retorna um token JWT

### 👤 **Usuários**

- `GET /users` - Lista todos os usuários
- `GET /users/:id` - Obtém detalhes de um usuário

### 🚨 **Relatórios de Acidentes**

- `POST /reports` - Envia um novo relatório de acidente
- `GET /reports` - Lista todos os relatórios
- `PUT /reports/:id` - Atualiza status de um relatório

---

## 🏗 Contribuição

Sinta-se à vontade para contribuir com melhorias no projeto! Para isso:

1. Faça um **fork** do repositório
2. Crie uma **branch** com sua funcionalidade (`git checkout -b minha-feature`)
3. Faça o **commit** (`git commit -m 'Minha melhoria'`)
4. Envie um **pull request** 🚀

---

## 📜 Licença

Este projeto é licenciado sob a **MIT License**.

---

Precisa de ajuda? Entre em contato! 🤝
