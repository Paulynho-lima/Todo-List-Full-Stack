import React, { useEffect, useState } from 'react';
import api from '../services/tasksApi';
import DeletTask from '../componentes/taskDelelte';
import moment from 'moment';


/*const Task = (value) => {
  return ( <li>{value}</li>);
};
*/

function ListTasks() {
  const [taskget , setTaskget] = useState([]);
  const [nameTask, setNameTask] = useState('');
  const [statusTask, setStatusTasks] = useState('');
  const [dateTasks, setDadeTasks] = useState('');
  const WAIT_TIME = 5000;

  const createTask = async (data) => {
    await api.post('/tasks', data)
    .then((response) => (console.log(response.data)))
    .catch((err) => (console.log(err.message)));

    console.log(data);
  };

  const onSubmitTasks = async (e) => {
    e.preventDefault();
    await createTask({
      name: nameTask,
      status: statusTask,
      creationDate: dateTasks,
    });
  };
  console.log(dateTasks)
 /* useEffect(() => {
      api.get('/tasks/')
    .then((response) => {
      setTaskget(response.data);
     
     }).catch((err) => {
      console.error("ops! ocorreu um erro : " + err);
    });
    
    
  },[]);*/

  
  

  useEffect(() => {
    const id = setInterval(() => {
      api
     .get('/tasks/')
     .then(res=>{
       setTaskget(res.data);
     })
     .catch(err=>{
       console.log(err);
     })
    }, WAIT_TIME);
    return () => clearInterval(id);
  }, [taskget]); 

    
  return (
   
    <div >
      <section className="App-header">
        <form onSubmit={ onSubmitTasks }>
          <label>
            Nome da Tarefa:
            <input 
            type="text" 
            name="tasks" 
            value={ nameTask }
            onChange={({target}) => setNameTask(target.value)}
             />
          </label>

          <label>
            Status da Tarefa:
            <input 
            type="text" 
            name="status" 
            value={ statusTask } 
            onChange={({target}) => setStatusTasks(target.value)} />
          </label>

          <label>
            Data de Criação:
            <input 
            type="date" 
            name="dateTasks" 
            value={ dateTasks } 
            onChange={({target}) => setDadeTasks(moment(target.value).format('DD/MM/YYYY'))} />
          </label>

          <button 
          type="submit" 
          name="adcionar" 
          onClick={onSubmitTasks}
          value={ false }
          >
            Adcionar Tarefa
          </button>
        </form>
   
    
        <h1>Listas de Tarefas</h1>
          <ul>
          {taskget.map(({_id, name, status,creationDate}) => (
          
             <div className="tasks">
            <li key={_id}>
              <p><b>Nome:</b> {name}</p>
              <p><b>Status:</b> {status}</p>
              <p><b>Criada em:</b> {creationDate}</p>
            </li>
            </div>
          ))}
        </ul>
        
         <DeletTask/>
      </section>
      
    </div>
  );
}

export default ListTasks;
