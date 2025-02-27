import { useState } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from 'uuid';

export default function Todos () {
    const [todos, setTodos] = useState([
        {
            title: "go to office",
            status: true,
            id : uuidv4()        
        },
        {
            title: "go to gym at 17:30",
            status: false,
            id : uuidv4()
        }
    ]);


    const onKeydownInput = (event) =>{
        if(event.key === 'Enter' && event.target.value !== ""){
            setTodos([
                ...todos,
                {
                    title : event.target.value,
                    status : false,
                    id : uuidv4()

                }
            ])
            event.target.value = ("")
        }
    }
    const deleteTodoHandler = (todo) =>{

        let newTodos = todos.filter((todoItem)=>{
            return todo.id != todoItem.id
        })
        setTodos(newTodos)
    }

    const toggleTodoStatusHandler = (todo) =>{
        let newTodos = todos.map ((todoItem)=>{
            if(todo.id == todoItem.id){

                todoItem.status = ! todoItem.status
            }
            return todoItem;
        })
        setTodos(newTodos)
    }
    const editTodoHandler = (todo,newTitleValue) =>{
        let newTodos = todos.map ((todoItem)=>{
            if(todo.id == todoItem.id){

                todoItem.title = newTitleValue
            }
            return todoItem;
        })
        setTodos(newTodos)
    }
    return(
        <div className="flex items-center justify-center h-screen">
            <div className="w-full px-4 py-8 mx-auto shadow lg:w-1/3  bg-white">
                <div className="flex items-center mb-6">
                    <h1 className="mr-6 text-4xl font-bold text-purple-600"> TO DO APP</h1>
                </div>
                <div className="relative">
                    <input type="text" placeholder="What needs to be done today?"
                    onKeyDown={onKeydownInput}

                    className="w-full px-2 py-3 border rounded outline-none border-grey-600" />
                </div>
                <TodoList todos={todos} deleteTodo={deleteTodoHandler} toggleTodo={toggleTodoStatusHandler} editTodo={editTodoHandler}/>
            </div>
        </div>
    )
}