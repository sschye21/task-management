import { useEffect, useState } from "react";
import Modal from "./Modal";
import { editTask } from "../services/task.service";

const Task = (props: any) => {

    const { id, name, description, dueDate, priority, getTasks } = props

    const [open, setOpenModal] = useState(false)
    const [editName, setEditName] = useState('')
    const [editDescription, setEditDescription] = useState('')
    const [editDueDate, setEditDueDate] = useState('')
    const [editPriority, setEditPriority] = useState('')

    useEffect(() => {
        setEditName(name)
        setEditDescription(description)
        setEditDueDate(dueDate)
        setEditPriority(priority)
    }, [id])

    const openEditModal = () => setOpenModal(true)
    const closeModal = () => setOpenModal(false)

    const confirmChanges = (id: string) => {
        editTask({
            name: editName, 
            description: editDescription, 
            dueDate: editDueDate, 
            priority: editPriority,
            id: id
        })
        .then(() => getTasks())
    }

    return (
        <div key={id} className="border p-4 my-4 bg-gray-200 border-solid rounded-md">
            <div className="flex flex-row justify-between">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{dueDate}</p>
            </div>
            <div className="py-4">
                <p className="w-9/12">{description}</p>
            </div>
            <div className="flex flex-row justify-between items-end">
                <p className={priority == "Due Soon" ? "text-orange-500" : priority == "Overdue" ? "text-red-500" : 'text-black'}>
                    {priority}
                </p>
                <button className="bg-blue-300 rounded-md p-2 px-4" onClick={openEditModal}>Edit</button>
            </div>
            {open &&
                <Modal 
                    open={open}
                    setOpen={setOpenModal}
                    name={editName}
                    setName={setEditName}
                    description={editDescription}
                    setDescription={setEditDescription}
                    dueDate={editDueDate}
                    setDueDate={setEditDueDate}
                    priority={editPriority}
                    setPriority={setEditPriority}
                    confirmButton={() => confirmChanges(id)}
                    edit={true}
                    closeModal={closeModal}
                />
            }
        </div>
    )
}

export default Task;