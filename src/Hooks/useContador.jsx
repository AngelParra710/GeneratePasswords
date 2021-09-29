import { useState} from "react";

export const useContador = (initialState = 7) => {
    const [state, setState] = useState({
        numeroCaracteres: initialState,
        mayusculas: 'Si',
        especiales: 'Si',
        numeros: 'Si',
        minusculas: 'Si'
    });
    
    const {numeroCaracteres, mayusculas, especiales, numeros} = state

    const increment = () =>{
        setState({
            ...state,
            numeroCaracteres: numeroCaracteres+1
        });
    }

    const decrement = () =>{
        if(numeroCaracteres >= 2){
            setState({
                ...state,
                numeroCaracteres: numeroCaracteres-1
            })
        }
    }

    const changeMayus = () => {
        setState({
            ...state,
            mayusculas: mayusculas == 'Si'? 'No':'Si',
        })
    } 

    const changeEspeciales = () => {
        setState({
            ...state,
            especiales: especiales == 'Si'? 'No':'Si',
        })
    }
    const changeNum = () =>{
        setState({
            ...state,
            numeros: numeros == 'Si'? 'No':'Si',
        })
    }
    return {
        state,
        increment,
        decrement,
        changeMayus,
        changeEspeciales,
        changeNum
    }
}