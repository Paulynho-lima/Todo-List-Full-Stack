const express = require('express');
const bodyParse = require('body-parser');

const { nameValidation, statusValidation, dateValidation } = require('./middlewares/validations');
const { createTaskControllers } = require('./controllers/taskControllers');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParse.json());

app.post('/tasks', nameValidation, statusValidation, dateValidation, createTaskControllers);

app.get('/', (req, res) => res.status(200).send('Estou aqui!!!'));

app.listen(PORT, () => console.log(`ouvindo a porta ${PORT} `));