/* eslint-disable sonarjs/no-identical-functions */
const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mockConnection');
const { getAllTasks } = require('../../models/taskModesls');

describe('Busca todas as tarefas do Banco de Dados', function () {
  let connectionMock;

  before(async function () {
    connectionMock = await getConnection();
    sinon.stub(MongoClient, 'connect').resolves(connectionMock);
  });

   after(async function () {
    await MongoClient.connect.restore();
  }); 
  describe('quando não tem uma tarefa criada', function () {
      it('retorna um array', async function () {
         const task = await getAllTasks();

         expect(task).to.be.a('array');
      });

      it('verifica se o array esta vazio', async function () {
        const task = await getAllTasks();
         // eslint-disable-next-line no-unused-expressions
        expect(task).to.be.empty;
      });
  });

  describe('quando existir tarefa criada', function () {
    it('retorna um array', async function () {
        const task = await getAllTasks();

        expect(task).to.be.a('array');
     });
  });
});