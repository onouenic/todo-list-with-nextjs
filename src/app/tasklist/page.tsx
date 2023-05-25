'use client'

import FormTask from "@/components/FormTask";
import Task from "@/components/Task";
import { Dispatch, createContext, useEffect, useReducer, useState } from "react";

/* export async function getServerSideProps(): Promise<any> {
  try {
    const res = await fetch('http://localhost:3000/tasks');
    const data = await res.json();
    return { props: { tasks: data } }
  } catch (error) {
    console.log(error)
  }
} */

function taskReducer(state: any, action: { type: any; payload: any; }) {
  switch(action.type) {
    case 'FETCH_TASKS':
      return [...state, ...action.payload]
    case 'ADD_TASK':
      return [...state, action.payload]
    case 'UPDATE_TASK':
      return state.map((task: any) => {
        if (task.id === action.payload.id) {
          return { ...task, completed: action.payload.completed }
        }
        return task;
      })
    case 'DELETE_TASK':
      return state.filter((task: any) => task.id !== action.payload)
    default:
      return state;
  }
}

class TasksContextDto {
  dispatch: Dispatch<{ type: any; payload: any; }> | undefined;
  task: any;
  setTask: any;
}

export const TasksContext = createContext(TasksContextDto);

export default function TaskList() {

  const [ tasks, dispatch ] = useReducer(taskReducer, []);
  const [ task, setTask ] = useState({});

  useEffect(() => {
    const getTasks = async () => {
      try {
        const res = await fetch('http://localhost:3000/tasks');
        const data = await res.json();
        dispatch({ type: 'FETCH_TASKS', payload: data })
      } catch (error) {
        console.log(error)
      }
    }
    getTasks();
  }, [])

  return (
    <div className="flex flex-col justify-center items-center w-full h-full mb-10">
      <TasksContext.Provider value={{ dispatch, task, setTask }}>
        <FormTask />
        
        {tasks.map(
          (task: any, index: number) =>
            <Task
              key={task.id}
              index={index}
              id={task.id}
              name={task.name}
              completed={task.completed}
            />
        )}
      </TasksContext.Provider>
    </div>
  )
}