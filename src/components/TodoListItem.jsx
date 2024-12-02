import { useState } from "react";
import DeleteIcons from "./Icons/DeleteIcons";
import EditIcons from "./Icons/EditIcons";
import Todos from "./Todos";

export default function TodoListItem ({todo ,deleteTodo,toggleTodo,editTodo}) {
    const [editMode , setEditMode] = useState(false)

    const editTodoHandler = (event)=>{
        if(event.key === 'Enter'){
            editTodo(todo,event.target.value)
            setEditMode(false)
        }
    }
    return(
        <li className="relative flex items-center justify-between px-2 py-6 border-b">
            {
                editMode
                ?   <div className="w-full flex items-center">
                        <input type="text" defaultValue={todo?.title} onChange={()=>{}} onKeyDown={editTodoHandler} className="w-full px-4 py-2 border border-gray-400 rounded" />
                        <DeleteIcons className="ml-2" onClick={ ()=>setEditMode(false) }/>
                     </div>

                :(
                    <div className=" flex items-center">
                        <div>
                        <input type="checkbox" checked={ todo?.status} onChange={()=>toggleTodo(todo)} className="" />
                        <p  className={`inline-block mt-1 ml-2 text-gray-600 ${todo.status ? 'line-through' : ''}`}>{todo?.title}</p>
                        </div>
                        <button type="button" className="absolute right-0 flex items-center space-x-1">
                            <EditIcons onClick={ ()=>setEditMode(true)} />
                            <DeleteIcons onClick={ ()=>deleteTodo(todo) }/>
                    </button>
                    </div>
                )
            }
        </li>
    )
}