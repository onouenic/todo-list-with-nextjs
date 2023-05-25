import { TasksContext } from "@/pages/tasklist";
import { useContext, useRef, useState } from "react";

export default function FormTask() {

  const nameRef = useRef();
  const { dispatch } = useContext(TasksContext);
  const [ error, setError ] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const name = nameRef.current.value;
      if (name.length <= 0) return setError('Digite o nome da tarefa');
      const res = await fetch('http://localhost:3000/create-task', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: nameRef.current.value })
      })
      const data = await res.json();
      dispatch({ type: 'ADD_TASK', payload: data })
      nameRef.current.value = '';
      setError('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form className="flex flex-col gap-2 justify-center items-center m-10">
      <input className="border shadow-md p-2 rounded-md" type="text" placeholder="Digite a tarefa" ref={nameRef}/>
      {error && <span className="text-red-500 text-sm">{error}</span>}
      <button className="border shadow-md p-2 rounded-md" onClick={handleSubmit}>Adicionar</button>
    </form>
  )
}