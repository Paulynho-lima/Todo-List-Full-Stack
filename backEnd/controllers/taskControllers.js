const { createListTask } = require('../models/taskModesls');

const createTaskControllers = async (req, res, next) => {
    try {
      const { name, status, creationDate } = req.body;
      const newTask = await createListTask(name, status, creationDate);
      console.log(newTask);
      return res.status(201).json({ _id: newTask, name, status, creationDate });
    } catch (error) {
        console.log(`POST CREATETASKS: ${error.message}`);
        next(error);
    }
};

module.exports = {
  createTaskControllers,
  
};