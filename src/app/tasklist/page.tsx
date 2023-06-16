'use client'

import FormTask from "@/components/FormTask";
import Task from "@/components/Task";
import { Dispatch, createContext, useEffect, useReducer, useState } from "react";

interface TaskProps {
  id: string;
  name: string;
  completed: boolean;
}

function taskReducer(state: TaskProps[], action: { type: string; payload: TaskProps | TaskProps[] }) {
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

type TasksContextType = {
  dispatch: Dispatch<{ type: string; payload: TaskProps | TaskProps[]; }> | undefined;
}

const TasksContextProps: TasksContextType = {
  dispatch: undefined,
}

export const TasksContext = createContext(TasksContextProps);

export default function TaskList() {

  const [ tasks, dispatch ] = useReducer(taskReducer, []);

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
      <TasksContext.Provider value={{ dispatch }}>
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