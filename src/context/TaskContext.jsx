//Immporto la función createContext para crear ese contexto compartido entre todos los componentes
import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

//Contexto
export const TaskContext = createContext();

//Componente que engloba al resto, renderiza componentes de jsx
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  function createTask(task) {
    setTasks([
      ...tasks,
      {
        title: task.title,
        id: tasks.length,
        description: task.description,
      },
    ]);
  }

  function deleteTask(taskId) {
    console.log(tasks);
    console.log(taskId);
    //Recorremos el array de taread y quitamos el que hay que borrar con el filter
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
  
  //Esto se ejecutará cdo cargue el componente TaskContext
  useEffect(() => {
    setTasks(data);
  }, []);


  let x = 20;

  let y = 2110;
  return (
    <TaskContext.Provider value={{
        // Si se llama igual la propiedad y el valor, no hace falta que ponga ambos...:
        // tasks: tasks,
        // deleteTask: deleteTask,
        // createTask: createTask,
        tasks,
        deleteTask,
        createTask,
    }}>{props.children}</TaskContext.Provider>
  );
}

// export default TaskContext;
