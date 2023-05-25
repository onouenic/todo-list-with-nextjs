import { TasksContext } from "@/pages/tasklist";
import { useContext, useState } from "react";
import DeleteModal from "./DeleteModal";

type Task = {
  id: number;
  name: string;
  completed: boolean;
}

export default function Task({ id, name, completed }: Task) {

  const { dispatch } = useContext(TasksContext);
  const [ isOpenModal, setIsOpenModal ] = useState(false);

  const handleCompleted = async () => {
    try {
      const res = await fetch(`http://localhost:3000/update-task/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !completed })
      })
      const data = await res.json();
      dispatch({ type: 'UPDATE_TASK', payload: { id, completed: !completed } })
    } catch (error) {
      console.log(error);
    }
  }

  const handleOpenModal = () => {
    setIsOpenModal(true);
  }
  
  return (
    <ul className="flex justify-between items-center border shadow-md w-10/12 p-4 m-2 text-start">
      <li>{id} -</li>
      <li className={`${completed ? ' line-through' : ''}`}>{name}</li>
      <li className="flex items-center justify-center gap-4">
        <button
          className={`
              border shadow-md rounded-md p-2
              ${completed
                ? 'bg-orange-600 hover:bg-orange-500 hover:transition-colors'
                : 'bg-emerald-600 hover:bg-emerald-500 hover:transition-colors'
              }`
            }
          onClick={handleCompleted}>
            {completed ? 'Refazer' : 'Concluir'}
        </button>
        <button
          className="border shadow-md rounded-md p-2 bg-red-600 hover:bg-red-500 hover:transition-opacity"
          onClick={handleOpenModal}>
            Excluir
        </button>
        {isOpenModal && (
          <DeleteModal setIsOpenModal={setIsOpenModal} id={id}/>
        )}
      </li>
    </ul>
  )
}
