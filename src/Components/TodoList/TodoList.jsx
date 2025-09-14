import Delete from './../Icons/Delete';

const TodoList = ({ todos, onDeleteTodo }) => {
    return (
        <li>
            <article>
                <label>
                    <input type='checkbox' />
                </label>
                <p className='complete'>{todos.description}</p>
                <button
                    className='outline contrast'
                    onClick={() => onDeleteTodo(todos.id)}
                >
                    <Delete />
                </button>
            </article>
        </li>
    );
};

export default TodoList;
