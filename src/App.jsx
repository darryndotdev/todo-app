import { data } from './data';
import AddTodo from './Components/AddTodo/AddTodo';
import Hero from './Components/Hero/Hero';
import TodoList from './Components/TodoList/TodoList';
import { useState } from 'react';

function App() {
    const [todos, setTodos] = useState(data);

    return (
        <div className='container'>
            <Hero />
            <AddTodo />
            <ul>
                {todos.map((todo) => (
                    <TodoList todos={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
}

export default App;
