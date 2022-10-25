import { useState } from "react";

export const useForm = ( initialForm = {} ) => {
    
    const [formState, setFormState] = useState( initialForm );


    //funcion para hacer el cambio de cualquier input
    const onInputChange = ({ target }) => {
        //lo que necesito del event.target
        //name: nombre del campo que cambia
        //value: valor que se ingresa en el input
        const { name, value } = target;

        //cambio del state
        setFormState({
            ...formState, 
            //quiero cambiar la que el name este siendo modificada
            // propiedades computadas de los objetos
            [ name ]: value
        });
    }

    //vaciar cajas de texto
    const onResetForm = () => {
        setFormState( initialForm )
    }


    return {
        //desestructuracion para sacar valores
        ...formState,
        //valor del formulario
        formState,
        //funcion para cambiarlo
        onInputChange,
        //reset form
        onResetForm
    }
}
