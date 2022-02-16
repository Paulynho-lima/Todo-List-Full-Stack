const connection = require('./connection');

const createListTask = async (name, status, creationDate) => {
    const connect = await connection();
    const { insertedId } = await connect.collection('tasks').insertOne({
        name, status, creationDate,
    });
        return insertedId;
    };

const getAllTasks = async () => {
    const connect = await connection();
    const all = await connect.collection('tasks').find({}).sort({ creationDate: '1' },
     { status: '1' }).toArray();
    console.log(all);
    return all;
};

    module.exports = {
        createListTask,
        getAllTasks,
       
    };