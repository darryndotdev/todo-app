import { useState } from 'react';
import Add from '../Icons/Add';

const AddTodo = ({ onAddTodo }) => {
    const [todo, setTodo] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (!todo) return;

        const newTodo = {
            description: todo,
            isComplete: false,
            id: Date.now(),
        };

        onAddTodo(newTodo);
        setTodo('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <fieldset role='group'>
                <input
                    type='text'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    name=''
                    id=''
                    placeholder='Write anything and hit enter to add'
                />
                <button>
                    <Add />
                </button>
            </fieldset>
        </form>
    );
};

export default AddTodo;
