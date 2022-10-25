import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-UseReducer/todoReducer";

export const useTodos = () => {

    const initialState = [];

    const init = () => {
        return JSON.parse( localStorage.getItem('todos')) || [];
    }

    //inicializar el reducer
    const [ todos, dispatch ] = useReducer( todoReducer, initialState, init )

    //disparar un efecto cuando el todos cambia
    useEffect(() => {
        
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        //enviar accion al reducer con el dispatch
        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = ( id ) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: id
        })
    }
            
    return {
        
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter( todo => !todo.done ).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        

    }
}

