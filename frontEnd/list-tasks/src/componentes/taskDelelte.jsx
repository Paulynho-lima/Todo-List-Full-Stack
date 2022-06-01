import React, { useState } from 'react';
import api from '../services/tasksApi';



function DeletTask() {
    const [taskget , setTaskget] = useState('');
    const [error , setError] = useState('');
    const [sucsses, setSucsses] = useState('');
  
   const  handleChange = (e) => {
       setTaskget({name: e.target.value})
    }
    const handleSubmit = (e ) => {
      e.preventDefault();
  
      api.delete(`/tasks/${taskget.name}`)
        .then(res => {
          console.log(res);
          setSucsses(res.data);
        }).catch((err) => setError(err.message))
    }

    console.log('E noiss',taskget.name);
      
    return (
     
      <div className="delete-tasks" >
      
        <form onSubmit={handleSubmit}>
          <label>
            Nome da Tarefa:
            <input   type="text" name="id" onChange={handleChange} />
          </label>
          <button onClick={handleSubmit} type="submit">Delete</button>
        </form>
      
           <p>{error}</p>
           { sucsses && <p>{sucsses.message}</p>} 
      </div>
    );
  }
  
  export default DeletTask;
  