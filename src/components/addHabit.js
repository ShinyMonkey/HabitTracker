import React from "react";
import { Modal } from 'react-responsive-modal';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit, details } from "../habitslice";
import '../styles/addHabits.css';


const AddButton=()=>{

    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);



    const dispatch= useDispatch();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit=()=>{
        dispatch(addHabit({title,description,details}));
        onCloseModal();
    }
    return(
        <>
        <button className="AddGoalButton" onClick={onOpenModal}><img src="https://cdn-icons-png.flaticon.com/128/992/992651.png" alt="add"/>Add a Goal</button>
        <Modal open={open} onClose={onCloseModal} center>
            <div className="modelContainer">
                <div className="modelTitel">Create a new Habit</div>
                <form onSubmit={handleSubmit} className="inputSection">
                    <label htmlFor='title'>Habit Title</label>
                        <input
                            type='text'
                            id='title'
                            placeholder='Enter title'
                            value={title}
                            autoFocus={true}
                            required={true}
                            onChange={(e) => setTitle(e.target.value)}/>

                    <label htmlFor='description'>Describe it</label>
                        <input
                            type='text'
                            id='description'
                            placeholder='Short description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}/>

                    <button type='submit' className="btn">Add Habit</button>
                </form>
            </div>
        </Modal>
        </>
    )
}



export default AddButton;