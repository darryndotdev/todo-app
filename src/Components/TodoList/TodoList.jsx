import Delete from './../Icons/Delete';

const TodoList = ({ todo, onDeleteTodo, onCompleteTodo }) => {
    return (
        <li>
            <article>
                <label>
                    <input
                        type='checkbox'
                        onChange={() => onCompleteTodo(todo.id)}
                        value={todo.isComplete}
                        checked={todo.isComplete ? 'checked' : ''}
                    />
                </label>
                <p className={todo.isComplete ? 'complete' : ''}>
                    {todo.description}
                </p>
                <button
                    className='outline contrast'
                    onClick={() => onDeleteTodo(todo.id)}
                >
                    <Delete />
                </button>
            </article>
        </li>
    );
};

export default TodoList;
