import { useEffect, useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import { getAllTasks, taskCreation } from "../services/task.service";

const TaskManagement = () => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [priority, setPriority] = useState('');

    const [tasks, setTasks] = useState([])
    const [searchName, setSearchName] = useState('')

    const createNewTask = () => {
        taskCreation({name, description, dueDate, priority})
        .then(() => getTasks())
    }

    const getTasks = () => {
        getAllTasks(searchName)
        .then(response => {
            setTasks(response?.data)
            setName('')
            setDescription('')
            setDueDate('')
            setPriority('')
        })
    }

    useEffect(() => {
        getTasks();
    }, [searchName])

    return (
        <div className='p-16'>
            <div className="flex flex-row justify-between pb-12">
                <h1 className="text-2xl font-bold">Task Management</h1>
                <NewTask 
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    priority={priority}
                    setPriority={setPriority}
                    createNewTask={createNewTask}
                />
            </div>
            <TaskList 
                tasks={tasks}
                setSearchName={setSearchName}
                getTasks={getTasks}
            />
        </div>
    )
}

export default TaskManagement;