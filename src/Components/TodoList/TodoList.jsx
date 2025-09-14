import Delete from './../Icons/Delete';

const TodoList = ({ todos }) => {
    return (
        <li>
            <article>
                <label>
                    <input type='checkbox' />
                </label>
                <p className='complete'>{todos.description}</p>
                <button className='outline contrast'>
                    <Delete />
                </button>
            </article>
        </li>
    );
};

export default TodoList;
