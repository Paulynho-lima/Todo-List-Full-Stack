const { expect } = require('chai');
const sinon = require('sinon');
const { MongoClient } = require('mongodb');
const { getConnection } = require('./mockConnection');

const { createListTask } = require('../../models/taskModesls');
const { createTaskControllers } = require('../../controllers/taskControllers');

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
    
  describe('quando é criado uma tarefa com sucesso', function () {
   it('retorna um objeto', async function () {
       const response = await createListTask(task);

       expect(response).to.be.a('object');
   });
   it('O objeto possui o "id" da nova tarefa inserido', async function () {
         const response = await createListTask(task);
    
        expect(response).to.have.a.property('id'); 
    });
  });
  describe('quando controllers é inserido com sucesso ', function () {
    const response = {};
    const request = {};

    before(function () {
        request.body = {
          name: 'estudar',
          status: 'em andamento',
          creationDate: '10/02/20222',
        };
       response.status = sinon.stub().returns(response);
        response.json = sinon.stub().returns();
      });
      
      it('é chamado o status com o código 201', async function () {
        await createTaskControllers(request, response);
       
        expect(response.status.calledWith(201)).to.be.equal(true);
      });

      it('é chamado o json retornando uma mensagem de sucesso"', async function () {
       await createTaskControllers(request, response);
      
        expect(response.json.calledWith({ message: 'Tarefa criada com sucesso' }))
          .to.be.equal(true);
        });
   });
});