import './TodoButton.css'

function TodoButton({ setOpenModal }) {
    return (
        <button
            className='TodoButton'
            onClick={
                (event) => {
                    console.log('Se dio clic al botón');
                    console.log(event);
                    console.log(event.target);
                    setOpenModal(state => !state);
                }
            }>+</button>
    );
}

export { TodoButton };