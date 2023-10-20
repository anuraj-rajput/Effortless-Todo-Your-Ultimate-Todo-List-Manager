import {createContext, useContext } from 'react'

export const TodoContext = createContext({
    //all the  values and methods available in context
    todos: [
        {
            id: 1,
            todo: "string",
            completed: false
        }
        
    ],
    // methods defination will be written somewhere else

    addTodo: (todo) => { },
    updateTodo: (id, todos) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
    
})

export const useTodo = () => {
   return useContext(TodoContext)
}

export const TodoProvider= TodoContext.Provider



