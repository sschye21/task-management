import { useEffect, useState } from "react";
import { getAllTasks } from "../services/task.service.js";
import Search from "./Search.js";
import Task from "./Task.js";
import { error } from "console";

const TaskList = (props: any) => {

    const { tasks, setSearchName, getTasks } = props;

    return (
        <>
            <Search 
                setSearchName={setSearchName}
            />
            {tasks?.map((task: any) => {
                return (
                    <Task 
                        name={task.name}
                        description={task.description}
                        dueDate={task.duedate.split('T')[0]}
                        priority={task.status}
                        id={task.id}
                        getTasks={getTasks}
                    />
                )
            })}
        </>
    )
}

export default TaskList;