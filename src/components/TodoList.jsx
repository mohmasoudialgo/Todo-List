import TodoListItem from "./TodoListItem";

export default function TodoList ({todos, deleteTodo,toggleTodo,editTodo}) {
        
    return(
        
            <ul className="list-reset">
                {
                    todos.map((todo,index)=>
                        <TodoListItem key={index}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleTodo={toggleTodo}
                        editTodo={editTodo}
                         />
                    )
                }
            </ul>

       
    )
}






































{/* <li className="relative flex items-center justify-between px-2 py-6 border-b">
<div>
    <input type="checkbox"  onChange={()=>{}}   className="" />
    <p  className="inline-block mt-1 ml-2 text-gray-600 line-through">Tailwind CSS To DO App List 2</p>
</div>
<button type="button" className="absolute right-0 flex items-center  space-x-1">
    <EditIcons></EditIcons>
    <DeleteIcons></DeleteIcons>
</button>
</li>  */}