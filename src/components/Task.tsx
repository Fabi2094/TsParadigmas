import React from "react";

type Tarea = {
    task: string;
    completed: boolean; // Estado de completado
    toggleComplete: () => void;
    deleteTask: () => void;
};

export const Task = ({ task, completed, toggleComplete, deleteTask }: Tarea) => {
    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={completed} 
                onChange={toggleComplete} 
            />
            <span>{task}</span>
            <button onClick={deleteTask}>Delete</button>
        </div>
    );
};
