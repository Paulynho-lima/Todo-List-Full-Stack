const { ObjectId } = require('mongodb');
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

    return all;
};

const updateTasks = async (id, name, status, creationDate) => {
    const connect = await connection();
    await connect.collection('tasks')
    .updateOne({ _id: ObjectId(id) }, { $set: { name, status, creationDate } });
};

const deleteTasks = async (name) => {
    const connect = await connection();
    const deletId = await connect.collection('tasks').deleteOne({ name });
    console.log('eu', deletId);
    return deletId;
};
module.exports = {
        createListTask,
        getAllTasks,
        updateTasks,
        deleteTasks,
};