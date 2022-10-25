import { useState } from "react";

//hook es una funcion que tiene un retorn

//valor inicial la persona lo envia initialValue 
//si no se envia sera igual a 10
export const useCounter = ( initialValue = 10 ) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = ( value = 1) => {
        // setCounter( counter + 1);
        // setCounter( counter + value )
        setCounter( current => current + value);
    }

    const decrement = ( value = 1) => {
        //validacion: no baje de 0
        // if ( counter === 0 ) return;
        // setCounter( counter - 1);
        // setCounter( counter -  value )
        setCounter( current => current - value );
    }

    const reset = () => {
        setCounter( initialValue );
    }

    return {
        // counter: counter
        counter,
        increment,
        decrement, 
        reset
    }
}