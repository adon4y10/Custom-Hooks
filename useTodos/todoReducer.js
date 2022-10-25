
export const todoReducer = ( initialState = [], action ) => {
    
    switch ( action.type ) {
        case '[TODO] Add Todo':
            //regresar siempre un nuevo state
            //payload contiene la informacion a insertar
            return [ ...initialState, action.payload ]
        
        // { type: [todo, remove], payload: id }
        //eliminar
        case '[TODO] Remove Todo':
            //filter regresa un nuevo arreglo
            return initialState.filter( todo => todo.id !== action.payload );

        case '[TODO] Toggle Todo':
            //por cada elemento del todo se verifica
            return initialState.map( todo => {

                //payload es el id
                if ( todo.id === action.payload ){

                    //regresar un nuevo todo
                    return{
                        ...todo,
                        done: !todo.done //si el done es false, lo cambia, y viceversa
                    }
                }

                return todo;
            })


        default:
            return initialState;
    }
}