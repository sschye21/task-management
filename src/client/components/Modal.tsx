import { FormEvent } from "react";

const Modal = (props: any) => {
    const { 
        closeModal, 
        name, 
        setName, 
        description,
        setDescription,
        dueDate,
        setDueDate,
        priority,
        setPriority,
        confirmButton,
        edit
    } = props;

    const submitButton = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        confirmButton()
        closeModal()
    }
    return (
        <>
            {/* Opacity background when modal is open */}
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-4/12 my-6 mx-auto">
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div className="flex items-center justify-between p-5 border-b rounded-t">
                            <h3 className="text-3xl font-semibold">
                                {edit ? 'Edit Task' : 'Create New Task'}
                            </h3>
                            <button className="text-2xl" onClick={closeModal}>x</button>
                        </div>

                        <form className="relative p-6 flex-auto" onSubmit={e => submitButton(e)}>
                            <label className="block text-md font-medium text-gray-700 w-11/12">Task Name</label>
                            <input className="border border-black rounded-sm w-11/12 p-1 mb-4 mt-2" onChange={e => setName(e.target.value)} value={name} required/>

                            <label className="block text-sm font-medium text-gray-700">Task Description</label>
                            <input className="border border-black rounded-sm w-11/12 p-1 mb-4 mt-2" onChange={e => setDescription(e.target.value)} value={description} required/>

                            <label className="block text-sm font-medium text-gray-700">Due Date</label>
                            <input className="border border-black rounded-sm w-11/12 p-1 mb-4 mt-2" type="date" onChange={e => setDueDate(e.target.value)} value={dueDate} required/>

                            <label className="block text-sm font-medium text-gray-700">Task Priority</label>
                            <select className="border border-black rounded-sm w-11/12 p-1 mb-4 mt-2" required onChange={e => setPriority(e.target.value)} value={priority}>
                                <option disabled selected value=""> -- select an option -- </option>
                                <option>Not Urgent</option>
                                <option>Due Soon</option>
                            </select>
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                <input
                                    className="bg-green-400 text-black active:bg-green-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg focus:outline-none ease-linear transition-all duration-150 cursor-pointer"
                                    type="submit"
                                    value={edit ? 'Edit' : 'Create'}
                                />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default Modal;