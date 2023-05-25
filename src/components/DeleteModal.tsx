import { TasksContext } from "@/pages/tasklist";
import { useContext } from "react";

export default function DeleteModal({ setIsOpenModal, id }) {

  const { dispatch } = useContext(TasksContext);

  const handleCloseModal = () => {
    setIsOpenModal(false);
  }

  const handleDelete = async () => {
    try {
      const res = await fetch(`http://localhost:3000/delete-task/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await res.json();
      dispatch({ type: 'DELETE_TASK', payload: id })
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex items-center justify-center w-screen h-screen bg-black/60">
      <div className="flex flex-col gap-10 p-5 rounded-md border shadow-md bg-white">
        <span className="m-2 text-lg">Você tem certeza que deseja deletar essa tarefa ?</span>
        <div className="flex gap-4 justify-end items-center">
          <button className="border shadow-md rounded-md p-2" onClick={handleCloseModal}>Cancelar</button>
          <button className="border shadow-md rounded-md p-2" onClick={handleDelete}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}