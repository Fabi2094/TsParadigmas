import React from "react";
import { iTask } from "./ToDo";

type TaskProps = {
    task: iTask;
    toggleComplete: () => void;
    toggleTaskPriority: () => void;
    deleteTask: () => void;
};

export const Task = ({ task, toggleComplete, deleteTask, toggleTaskPriority }: TaskProps) => {
    return (
       <div className="task-container">
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={toggleComplete} 
            />
            <span>{`${task.description}`}</span>
            <div className="priorityInput">
                <label>Mark as high priority</label>    
                <input
                    type="checkbox" 
                    checked={task.highPriority} 
                    onChange={toggleTaskPriority} 
                />
            </div>   
            <button onClick={deleteTask}>Delete</button>
        </div>
        <div>
            {task.highPriority && <img src="https://icons.iconarchive.com/icons/gartoon-team/gartoon-misc/512/Dialog-Warning-Exclamation-Mark-icon.png" alt="red exclamation icon" className="logo" />}
        </div>
       </div>
    );
};
