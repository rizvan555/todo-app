import React, { useState } from 'react';
import Arrow from './resource/icons/Arrow.png';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      type: 'radio',
      nameTodo: 'todo-list',
      contain: ' Create project design',
    },
    {
      id: 2,
      type: 'radio',
      nameTodo: 'todo-list',
      contain: ' Complete React project',
    },
    {
      id: 3,
      type: 'radio',
      nameTodo: 'todo-list',
      contain: ' Submit project',
    },
    {
      id: 4,
      type: 'radio',
      nameTodo: 'todo-list',
      contain: 'Read for 1 hour',
    },
    {
      id: 5,
      type: 'radio',
      nameTodo: 'todo-list',
      contain: ' Pick up groceries',
    },
  ]);
  const [todo, setTodo] = useState('');
  const [addCount, setAddCount] = useState(5);

  const deleteTodos = () => {
    const newTodoList = todoList.filter((todo) => !todo);
    setTodoList(newTodoList);
  };

  const addTodo: any = () => {
    if (todo !== '') {
      const newTodo = {
        id: todoList.length + 1,
        type: 'radio',
        nameTodo: 'todo-list',
        contain: todo,
      };
      setTodoList([...todoList, newTodo]);
      setAddCount(addCount + 1);
    }
  };

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO</h1>
      </header>

      <main>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="add-container"
        >
          <input
            type="text"
            placeholder="Create a new todo..."
            id="add-todo"
            onChange={handleTodoChange}
          />
          <button onClick={() => addTodo()}>
            <img src={Arrow} alt="arrow-icon" />
          </button>
        </form>

        <div className="todo-list">
          <ul>
            {todoList.map((todo) => (
              <li key={todo.id}>
                <input type={todo.type} name={todo.nameTodo} />
                {todo.contain}
              </li>
            ))}
          </ul>
        </div>
        <div className="result">
          <div className="items-box">
            <p>{addCount}</p>
            <span>Items</span>
          </div>
          <div className="order-box">
            <p
              onClick={() => {
                deleteTodos();
              }}
            >
              Clear Complete
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
