/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-key */
import { ITask } from '@/types/tasks';
import React from 'react';
import Task from './Task';

interface TodoListProps {
    tasks: ITask[];
}

const TodoList: React.FC<TodoListProps> = ({ tasks }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                {/* Table Head */}
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                    {tasks.map((task) => (<Task task={task}/>))}
                </tbody>


            </table>
        </div>
    );
};

export default TodoList;
