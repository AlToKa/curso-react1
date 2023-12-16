import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error
      } = useLocalStorage('TODOS_V1', []);

      // Estados
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(false);
    
      let completedTodos = todos.filter(todo => !!todo.completed).length;
      let totalTodos = todos.length;
    
      // console.log('log 1');
    
      // React.useEffect(() => {
      //   console.log('log 2');
      // }, []);
    
      // console.log('log 3');
    
      let searchedTodos = todos.filter(
        (todo) => {
          return todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
        }
      );
    
      const completeTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex =  newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const newTodos = [...todos];
        const todoIndex =  newTodos.findIndex(
          (todo) => todo.text === text
        );
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      };

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false
        });
        saveTodos(newTodos);
      };

    return (
      <TodoContext.Provider value={{
        loading,
        error,
        completedTodos,
        totalTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        openModal,
        setOpenModal
        }}>
            { children }
    </TodoContext.Provider>
    );
    
}

export { TodoContext, TodoProvider };