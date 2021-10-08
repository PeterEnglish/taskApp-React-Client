import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import './addtask.css'



export default function AddTask() {
    const [description, setDescription] = useState("");
    const [done] = useState(false)
    const [priority, setPriority] = useState("Medium")

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = {
            description,
            done,
            priority
        }
        try {
            await axios.post("/tasks", newTask);
            window.location.replace("/");
        } catch (err) { }
    };

    return (
        <div className="write">
            <form className="writeTask" onSubmit={handleSubmit}>
                <div className="writeTaskGroup">
                    <input
                        className="writeInput"
                        type="text"
                        placeholder="Description"
                        autoFocus={true}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <select select value={priority} onChange={e=>setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option selected value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                </div>

                <button className="button" type="submit">
                    Create Task
                </button>
            </form>
        </div>
    )
}
