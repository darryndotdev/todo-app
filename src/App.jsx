import AddTodo from './Components/AddTodo/AddTodo';
import Hero from './Components/Hero/Hero';
import TodoList from './Components/TodoList/TodoList';
import { useState, useEffect } from 'react';

function App() {
    const getTodosLocalStorage = () => {
        const saved = localStorage.getItem('todos');
        return saved ? JSON.parse(saved) : [];
    };

    const saveTodosLocalStorage = (todos) => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const [todos, setTodos] = useState(getTodosLocalStorage);

    useEffect(() => {
        saveTodosLocalStorage(todos);
    }, [todos]);

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
            <main>
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
            </main>
        </div>
    );
}

export default App;
