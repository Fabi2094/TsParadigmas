import React from "react";
import { Task } from "./Task";

type TaskListProps = {
    taskList: { task: string; completed: boolean }[];
    deleteTask: (index: number) => void;
    toggleTaskComplete: (index: number) => void;
};

export const TaskList = ({ taskList, deleteTask, toggleTaskComplete }: TaskListProps) => {
    return (
        <div className="taskList">
            {taskList.map((task, index) => (
                <Task 
                    key={index} 
                    task={task.task} 
                    completed={task.completed}
                    toggleComplete={() => toggleTaskComplete(index)} 
                    deleteTask={() => deleteTask(index)} 
                />
            ))}
        </div>
    );
};
