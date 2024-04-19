import Search from "./Search.js";
import Task from "./Task.js";

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