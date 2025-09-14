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

    function handleCompleteTodo(id) {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, isComplete: !todo.isComplete }
                    : todo
            )
        );
    }

    return (
        <div className='container'>
            <Hero />
            <AddTodo onAddTodo={handleAddTodo} />
            <ul>
                {todos.map((todo) => (
                    <TodoList
                        todo={todo}
                        key={todo.id}
                        onDeleteTodo={handleDeleteTodo}
                        onCompleteTodo={handleCompleteTodo}
                    />
                ))}
            </ul>
        </div>
    );
}

export default App;
