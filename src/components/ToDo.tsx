import React, { useState } from 'react';
import { TaskList } from './ListaTareas';

export const ToDo = () => {
    const [newTask, setNewTask] = useState<string>('');
    const [taskList, setTaskList] = useState<{ task: string; completed: boolean }[]>([]);

    const handleAddTask = () => {
        if (newTask.trim() === '') return;
        setTaskList(prevTasks => [...prevTasks, { task: newTask, completed: false }]);
        setNewTask('');
    };

    const handleDeleteTask = (index: number) => {
        setTaskList(tasks => tasks.filter((_, i) => i !== index));
    };

    const toggleTaskComplete = (index: number) => {
        setTaskList(tasks => 
            tasks.map((t, i) => 
                i === index ? { ...t, completed: !t.completed } : t
            )
        );
    };

    return (
        <div>
            <h1>Task List</h1>
            <div className="flex">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="New Task"
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <TaskList 
                taskList={taskList} 
                deleteTask={handleDeleteTask} 
                toggleTaskComplete={toggleTaskComplete}
            />
            
            <div className="credits">
                <img src="https://www.escinf.una.ac.cr/templates/yootheme/cache/26/logoESCINF-26dea115.webp" alt="Logo Universidad" className="logo" />
                <ul>
                    <li>Fabiana Barrantes Li</li>
                    <li>Alejandro Barrantes Víquez</li>
                    <li>Ginmer Chavez</li>
                    <li>Bryan Mendoza Castrillo</li>
                </ul>
            </div>
        </div>
    );
};
