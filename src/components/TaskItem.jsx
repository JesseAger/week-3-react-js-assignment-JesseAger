import Button from "./Button";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-700 p-3 rounded shadow">
      <span className={task.completed ? "line-through text-gray-400" : ""}>{task.text}</span>
      <div className="flex gap-2">
        <Button onClick={() => onToggle(task.id)}>{task.completed ? "Undo" : "Done"}</Button>
        <Button variant="danger" onClick={() => onDelete(task.id)}>Delete</Button>
      </div>
    </div>
  );
}
