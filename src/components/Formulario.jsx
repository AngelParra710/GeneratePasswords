import React from 'react';
import {Contenido} from './Contenido'
import './form.css'


export const Formulario = () =>{
    const name = '(A) => J'
    const prevent = (e) => {
        e.preventDefault();
    }
    return (
        <div className="main-container">
            <h1>{name}</h1>
            <h2>Generador de Contraseñas</h2>
            <div className ="container-form">
                <form onSubmit={prevent}>
                    <Contenido />
                </form>
            </div>
        </div>
    )
}