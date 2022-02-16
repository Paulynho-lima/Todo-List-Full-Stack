const { createListTask, getAllTasks } = require('../models/taskModesls');

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

const getTaskControllers = async (req, res, next) => {
  try {
    const all = await getAllTasks();

    return res.status(200).json(all);
  } catch (error) {
    console.log(`POST GETALLTASKS: ${error.message}`);
    next(error);
  }
};

module.exports = {
  createTaskControllers,
  getTaskControllers,
  
};