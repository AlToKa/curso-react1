import './TodoList.css';

function TodoList({ children }) {
    return (
      <ul className='Todolist'>
        { children }
      </ul>
    );
}

export { TodoList }