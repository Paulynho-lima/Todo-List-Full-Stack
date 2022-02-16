const connection = require('./connection');

const createListTask = async (name, status, creationDate) => {
    const connect = await connection();
    const { insertedId } = await connect.collection('tasks').insertOne({
        name, status, creationDate,
    });
        return insertedId;
    };

    module.exports = {
        createListTask,
       
    };