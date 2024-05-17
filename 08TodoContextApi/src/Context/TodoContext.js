 import {React,useContext,createContext} from 'react'

export const TodoContext = createContext({
    todos :[
        {
           id : '1',
           todoText : 'Todo msge',
           checked : false
        },
          ],
          addTodo : (todo)=>{},
          removeTodo : (id) =>{},
          toggleTodo : (id) =>{},
          updateTodo : (id,todo) =>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider =  TodoContext.Provider


