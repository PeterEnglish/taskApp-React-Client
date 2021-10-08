import Task from "../Task/Task";
import "./tasks.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Tasks() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        const fetchTasks = async () => {
            const res = await axios.get("/tasks/");
            setTasks(res.data.reverse());
        };
        fetchTasks();
    });

    return (
        <div className="tasks">
            {tasks.map((t) => (
                <Task task={t} />
            ))}
        </div>
    );
}