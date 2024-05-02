import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {} from './Context/index'
import { TodoProvider } from './Context/TodoContext'
import {Todoform} from './Components/Todoform'
import {Todoitem} from './Components/Todoitem'
import index from './Components/index'

function App() {
  const [todos,setTodos] = useState([])
 const addTodo = (todo) =>{
  setTodos((prev)=>[{id:Date.now(),...todo},...prev])
 }
 const removeTodo = (id)=>{
  setTodos((prevtodo) =>{ prevtodo.filter((previoustodo)=> previoustodo.id!==id) })
 }

 const updateTodo = (id,todo) =>{
   setTodos((prevTodo)=>prevTodo.map((previoustodo)=>(previoustodo.id===id?todo:prevTodo)))
 }
 const toggleTodo=(id)=>{
  setTodos((prevTodo)=>prevTodo.map((previoustodo)=>(previoustodo.id===id?{...previoustodo,checked:!previoustodo.checked}:previoustodo)))
 }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
  },[todos])
  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify)
  },[todos])

  return (
    <TodoProvider  value={{todos,addTodo,removeTodo,toggleTodo,updateTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <Todoform/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <Todoitem todo={todo} />
                          </div>
                        ))}
            
        </div>
    </div>
</div>
</TodoProvider>
      
  );
}

export default App
