import React from "react";
import { Task } from "./Task.tsx";
import { iTask } from "./ToDo";

type TaskListProps = {
    taskList: iTask[];
    deleteTask: (index: number) => void;
    toggleTaskComplete: (index: number) => void;
    toggleTaskPriority: (index: number) => void;
};

export const TaskList = ({ taskList, deleteTask, toggleTaskComplete, toggleTaskPriority }: TaskListProps) => {
    return (
        <div className="taskList">
            {taskList.map((task: iTask, index: number) => (
                <Task 
                    key={index} 
                    task={task}
                    toggleComplete={() => toggleTaskComplete(index)} 
                    toggleTaskPriority={() => toggleTaskPriority(index)} 
                    deleteTask={() => deleteTask(index)} 
                />
            ))}
        </div>
    );
};
