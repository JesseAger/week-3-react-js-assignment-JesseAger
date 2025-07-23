import { useState } from 'react';
import { useLocalStorage } from '../utils/useLocalStorage';
import TaskItem from '../components/TaskItem';
import Button from '../components/Button';

export default function TaskPage() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), text: input, completed: false };
    setTasks([newTask, ...tasks]);
    setInput("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id));

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true :
    filter === "active" ? !task.completed :
    task.completed
  );

  return (
    <div className="max-w-xl mx-auto space-y-4">
      <h2 className="text-2xl font-bold text-center">Your Tasks</h2>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter new task"
          className="flex-1 border rounded px-3 py-2"
        />
        <Button onClick={addTask}>Add</Button>
      </div>

      <div className="flex gap-2 justify-center">
        {["all", "active", "completed"].map(type => (
          <Button
            key={type}
            variant={filter === type ? "primary" : "secondary"}
            onClick={() => setFilter(type)}
          >
            {type}
          </Button>
        ))}
      </div>

      <div className="space-y-2">
        {filteredTasks.length === 0 ? (
          <p className="text-center text-gray-500">No tasks found.</p>
        ) : (
          filteredTasks.map(task => (
            <TaskItem key={task.id} task={task} onToggle={toggleTask} onDelete={deleteTask} />
          ))
        )}
      </div>
    </div>
  );
}
