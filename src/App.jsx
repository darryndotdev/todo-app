import { data } from './data';
import AddTodo from './Components/AddTodo/AddTodo';
import Hero from './Components/Hero/Hero';
import TodoList from './Components/TodoList/TodoList';
import { useState } from 'react';

function App() {
    const [todos, setTodos] = useState(data);

    function handleAddTodo(todo) {
        setTodos((todos) => [...todos, todo]);
    }

    function handleDeleteTodo(id) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    return (
        <div className='container'>
            <Hero />
            <AddTodo onAddTodo={handleAddTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoList
                        todos={todo}
                        key={todo.id}
                        onDeleteTodo={handleDeleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
