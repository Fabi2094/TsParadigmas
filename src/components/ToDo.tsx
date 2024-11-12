import React, { useState } from 'react';
import { TaskList } from './ListaTareas';

export interface iTask {
    description: string;
    completed: boolean;
    highPriority: boolean;
}

export const ToDo = (): React.JSX.Element => {
    const [newTask, setNewTask] = useState<string>('');
    const [taskList, setTaskList] = useState<iTask[]>([]);

    const handleAddTask = (): void => {
        if (newTask.trim() === '') return;
        setTaskList(prevTasks => [...prevTasks, { description: newTask, completed: false, highPriority: false }]);
        setNewTask('');
    };

    const handleDeleteTask = (index: number): void => {
        setTaskList(tasks => tasks.filter((_, i) => i !== index));
    };

    const toggleTaskComplete = (index: number): void => {
        setTaskList(tasks => 
            tasks.map((task, _index) => 
                _index === index ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const toggleTaskPriority = (index: number): void => {
        setTaskList(tasks => 
            tasks.map((task, _index) => 
                _index === index ? { ...task, highPriority: !task.highPriority } : task
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
                toggleTaskPriority={toggleTaskPriority}
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
