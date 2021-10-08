import { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment'
import './task.css'

export default function Task({task}) {
  const [date, setDate] = useState("")
    const [done, setDone] = useState(null);
    const [taskColor, setTaskColor] = useState("yellow");
    const handleDelete = async () => {
        try {
          await axios.delete(`/tasks/${task._id}`);
        } catch (err) {}
      };
    
      useEffect(() => {
        findPriority();
        convertMongoDate(date);
      });

    const handleDoneToggle = async() =>{
          try{
            await axios.put(`/tasks/${task._id}`)
            setDone(!done);
          }catch(err){
            
          }
      
    }

      const findPriority= () =>{
        if(task.priority ==="Medium"){
          setTaskColor("yellow")
        }
        else if(task.priority==="High"){
          setTaskColor("red")
        }else{
          setTaskColor("green")
        }
      }

      const convertMongoDate = (date) =>{
        let d = moment(date);
        setDate(d.format('YYYY-MM-DD HH:mm:ss'))
      }

    return (
        <div className={" taskItem " + taskColor}>
            <h2>{task.description}</h2>
            <p>{task.done?'Done': 'Not Yet Done'}</p>
            <p>Priority:{task.priority}</p> 
            <p>ID: {task._id}</p>
            <p>Created At: {date} </p>

            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleDoneToggle}>Toggle</button>
        </div>
    )
    }
