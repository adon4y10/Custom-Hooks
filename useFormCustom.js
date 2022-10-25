import { useState } from "react"

export const useFormCustom = ( initial = 1 ) => {
    
    const [text, setText] = useState('')

    const onInputChange = ({ target }) => {
        // if ( text.trim().length < 1) return;
        setText( target.value );
    }
    
    const increment = () => {
        // setCounter( counter + 1);
        setText('');
    }
 
    return{
        ...useFormCustom,
        onInputChange,
        text,
        increment
    }
}
