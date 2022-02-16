const express = require('express');
const bodyParse = require('body-parser');

const { nameValidation, statusValidation, dateValidation } = require('./middlewares/validations');
const { createTaskControllers, getTaskControllers,
    updateTasksControllers, deleteTasksControllers } = require('./controllers/taskControllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParse.json());

app.post('/tasks', nameValidation, statusValidation, dateValidation, createTaskControllers);
app.get('/tasks', getTaskControllers);
app.put('/tasks/:id', nameValidation, statusValidation, dateValidation, updateTasksControllers);
app.delete('/tasks/:id', deleteTasksControllers);

app.get('/', (req, res) => res.status(200).send('Estou aqui!!!'));

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT} `));