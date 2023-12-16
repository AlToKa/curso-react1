import React from "react";
import { TodoContext } from '../TodoContext'
import './TodoForm.css'

function TodoForm() {
    //consumir el contexto de la aplicación
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    //estado
    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmitPropio = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    };

    const onCancelPropio = () => {
        setOpenModal(false);
    };

    const onChangePropio = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmitPropio}>
            <label>Ingresa el nuevo TODO!</label>
            <textarea placeholder="Descripción del TODO" value={newTodoValue} onChange={onChangePropio}/>
            <div className="TodoForm-buttonContainer">
                <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancelPropio}>
                    Cancelar
                </button>
                <button className="TodoForm-button TodoForm-button--add" type="submit">
                    Añadir
                </button>
            </div>
        </form>
    );
}

export { TodoForm };