import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [id, setId] = useState(4);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar",
      description:
        "Estudar programação para conseguir uma oportunidade na area",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Treinar",
      description:
        "Estudar programação para conseguir uma oportunidade na area",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Jogar",
      description:
        "Estudar programação para conseguir uma oportunidade na area",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newtasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newtasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id,
      title,
      description,
      isCompleted: false,
    };
    setId(id + 1);
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-white font-bold text-center">
          Gerenciador de tarefa
        </h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
