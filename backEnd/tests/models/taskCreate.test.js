const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mockConnection');

const { createListTask } = require('../../models/taskModesls');

describe('Insere uma tarefa no Banco de Dados', function () {
    let connectMock;
    const task = {
      name: 'correr',
      status: 'em andamento',
      creationDate: '15/02/2022',
  };
    before(async function () {
        connectMock = await getConnection();
        sinon.stub(MongoClient, 'connect').resolves(connectMock);
    });

    after(async function () {
        await connectMock.db('ListTasks').collection('tasks').drop();
        MongoClient.connect.restore();
    });
    
  describe('quando é inserido uma tarefa com sucesso', function () {
   it('retorna um objeto', async function () {
       const response = await createListTask(task);

       expect(response).to.be.a('object');
   });
   it('O objeto possui o "id" da nova tarefa inserido', async function () {
         const response = await createListTask(task);
    
        expect(response).to.have.a.property('id'); 
    });
  });
});