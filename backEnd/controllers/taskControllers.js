const { createListTask, getAllTasks, updateTasks, deleteTasks } = require('../models/taskModesls');

const createTaskControllers = async (req, res, next) => {
    try {
      const { name, status, creationDate } = req.body;
       await createListTask(name, status, creationDate);
    
      return res.status(201).json({ message: 'Tarefa criada com sucesso' });
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

const updateTasksControllers = async (req, res, next) => {
  try {
      const { id } = req.params;
      const { name, status, creationDate } = req.body;
       await updateTasks(id, name, status, creationDate);
      
      return res.status(200).json({ _id: id, name, status, creationDate });
  } catch (error) {
    console.log(`POST UPDATETASKS: ${error.message}`);
      next(error);
  }
};

const deleteTasksControllers = async (req, res, next) => {
  try {
      const { id } = req.params;
       await deleteTasks(id);
      return res.status(200).json({ message: 'Tarefa removida com sucesso' });
  } catch (error) {
    console.log(`POST DELETETASKS: ${error.message}`);
      next(error);
  }
};

module.exports = {
  createTaskControllers,
  getTaskControllers,
  updateTasksControllers,
  deleteTasksControllers,
};