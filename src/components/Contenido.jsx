import React from 'react';
import {useContador} from '../Hooks/useContador'
import { usePassword } from '../Hooks/usePassword'
import './form.css'


export const Contenido = () =>{
    const {state, increment, decrement, changeMayus, changeEspeciales, changeNum} = useContador(7)

    const {numeroCaracteres, mayusculas, especiales, numeros} = state

    const { password, generatePassword } = usePassword()

    return (
        <>
            <label>Caracteres a generar</label>
            <div className="count">
                <button onClick={decrement}>-</button>
                <p>{numeroCaracteres}</p>
                <button onClick={increment}>+</button>
            </div>
            <label>¿Agregar mayusculas?</label>
            <button onClick = {changeMayus}>{mayusculas}</button>
            <label>¿Agregar caracteres especiales?</label>
            <button onClick = {changeEspeciales}>{especiales}</button>
            <label>Agregar numeros?</label>
            <button onClick = {changeNum}>{numeros}</button>
            <button onClick = {()=>generatePassword(state)}>Generar Contraseña</button>
            <input type="text" value={password}/>
        </>
    )
}