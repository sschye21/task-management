import { useState } from 'react';
import Modal from './Modal.js';

const NewTask = (props: any) => {

    const { 
        name, 
        setName, 
        description, 
        setDescription, 
        dueDate, 
        setDueDate, 
        priority, 
        setPriority,
        createNewTask
    } = props;

    const [open, setOpenModal] = useState(false);

    const openModal = () => setOpenModal(true);
    const closeModal = () => setOpenModal(false);

    return (
        <>
            <button
                className="bg-green-400 rounded-md p-4 font-bold"
                type="button"
                onClick={openModal}
            >
                New Task
            </button>
            {open &&
                <Modal 
                    closeModal={closeModal}
                    name={name}
                    setName={setName}
                    description={description}
                    setDescription={setDescription}
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    priority={priority}
                    setPriority={setPriority}
                    confirmButton={createNewTask}
                    edit={false}
                />
            }
        </>
    );
}

export default NewTask;