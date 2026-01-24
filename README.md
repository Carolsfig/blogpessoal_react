# Blog Pessoal - Frontend (React)

Aplicação frontend do projeto **Blog Pessoal**, desenvolvida em **React JS**, com integração completa a uma **API REST** com autenticação e controle de acesso via **JWT**.

O sistema permite o gerenciamento de **usuários, postagens e temas**, oferecendo uma experiência completa de um blog moderno com autenticação, rotas protegidas e consumo de API.



## Funcionalidades

* Cadastro de usuários
* Login com autenticação JWT
* Armazenamento e envio automático do token JWT nas requisições
* CRUD completo de **postagens**
* CRUD completo de **temas**
* Página de **perfil do usuário**
* Proteção de rotas para usuários autenticados
* Integração total com backend



## Tecnologias Utilizadas

* **React JS** – Construção da interface e componentização
* **Vite** – Setup e build do projeto
* **Tailwind CSS** – Estilização responsiva e reutilizável
* **React Router DOM** – Gerenciamento de rotas públicas e privadas
* **Axios** – Consumo da API REST e configuração de headers com JWT



## Autenticação

A aplicação utiliza **JWT (JSON Web Token)** para autenticação.

Fluxo:

1. O usuário realiza login
2. O backend retorna um token JWT
3. O token é armazenado no frontend
4. O token é enviado automaticamente no header das requisições protegidas:

```http
Authorization: Bearer <token>
```
## 🧭 Como Utilizar a Aplicação

1. Acesse a aplicação pelo link do deploy ou execute o projeto localmente.
2. Clique em **Cadastre-se** e preencha os dados solicitados.

   * No campo **foto**, você pode inserir o link de uma imagem disponível online ou deixar em branco.
   * No campo **usuário**, utilize um **email válido** ou fictício (exemplo: `email@email.com.br`).
   * A **senha deve conter no mínimo 8 caracteres**.
3. Após o cadastro, faça **login** na página de login.
4. Com o usuário autenticado, você poderá:

   * Criar, editar e deletar **postagens**
   * Criar, editar e deletar **temas**
   * Visualizar e acessar seu **perfil de usuário**
5. Fique à vontade para testar todas as funcionalidades da aplicação.



## ▶️ Execução Local

### Pré-requisitos

* Node.js
* npm ou yarn

### Passos

```bash
git clone https://github.com/Carolsfig/blogpessoal_react.git
cd blogpessoal_react
npm install
npm run dev
```

A aplicação estará disponível em:

```
http://localhost:5173
```



## Backend

Este frontend consome a API REST do projeto **Blog Pessoal – Backend**, desenvolvida em **NestJS**, com autenticação JWT, testes automatizados e documentação Swagger.

Repositório do backend: [https://github.com/Carolsfig/nestjs](https://github.com/Carolsfig/nestjs)



## Deploy

A aplicação está disponível online:

🔗 **Link do deploy:** https://blogpessoal-react-sooty.vercel.app/ 



## Objetivo do Projeto

Consolidar conhecimentos em:

* React e frontend moderno
* Consumo de APIs REST
* Autenticação e controle de acesso
* Integração frontend + backend
* Boas práticas de organização e componentização



## 👩‍💻 Desenvolvido por

**Carolina Figueiredo**

* GitHub: [https://github.com/Carolsfig](https://github.com/Carolsfig)
* LinkedIn: https://www.linkedin.com/in/carolinafigueiredoo
