# Desafio-Tecnico-Trybe
Desafio de treinamento Trybe
## Contexto
---

Esse é um  projeto full stack de treinamento  desenvolver uma aplicação  para gerenciar tarefas de colaboradores

---

## Como instalar

Pre-requisitos para rodar o projeto: 
- mongoDB
- NPM

Copie o ssh do projeto 'git@github.com:Paulynho-lima/Desafio-Tecnico-Trybe.git'

* Abra um terminal no seu computador e utilize os comandos a baixo na ordem que são apresentados:

  * `git clone git@github.com:Paulynho-lima/Desafio-Tecnico-Trybe.git`
  * `cd bakend`
  * `npm install`
  * `npm start`
 A aplicação está configurada para rodar na porta local 3001. 

---

## Modo de utilização

A API consta com 1 rotas: 
* `/tasks`:
  * `/` [`GET`]  Lista todas as tarefas cadastradas 
  * `/:id` [`POST`] Insere um novova tarefa
  * `/:id` [`PUT`]  Edita tarefa
  * `/:id` [`DELETE`] Deleta uma terefa

---

## Modo de desenvolvimento

---

Foi utilizado para o desenvolvimento desse projeto o NodeJS com Express para a criação básica, Mocha/Chai para a criação dos teste unitários.

### Banco de dados

O banco escolhido para a aplicação foi `Mongodb`.

---

## Próximos passos

* Implementação de Token de acesso
* Deplay no Heroku
* Implementação de transmissão de dados `in real time` através do SocketIO

---

## Contatos

 * Email: paulynho_lima@hotmail.com
 * Linkedin: https://www.linkedin.com/in/paulo-lima/
  
