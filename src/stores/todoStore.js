import { writable } from 'svelte/store';
import { initialTodos } from './data.js';

export const todos = writable([]);
export const name = writable('Svelte');

export const loadTodos = () => {
    todos.set(initialTodos);
}

loadTodos();

export const addTodo = (text) => {
    const newTodo = {
        id: todos.length + 1,
        text,
        completed: false,
    };

    todos.update(cur => [...cur, newTodo]);
};

export const deleteTodo = (id) => {
    todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id, currentState) => {
    todos.update((todos) => {
        const updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !currentState,
                };
            }
            return todo;
        });
        return updatedTodos;
    });
};
