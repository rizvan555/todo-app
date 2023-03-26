import React, { useState } from 'react';
import Arrow from './resource/icons/Arrow.png';

function App() {
  const [todoList, setTodoList] = useState([
    {
      id: 1,
      type: 'radio',
      contain: ' Create project design',
      completed: true,
    },
    {
      id: 2,
      type: 'radio',
      contain: ' Complete React project',
      completed: false,
    },
    {
      id: 3,
      type: 'radio',
      contain: ' Submit project',
      completed: false,
    },
    {
      id: 4,
      type: 'radio',
      contain: 'Read for 1 hour',
      completed: false,
    },
    {
      id: 5,
      type: 'radio',
      contain: ' Pick up groceries',
      completed: false,
    },
  ]);

  const [todo, setTodo] = useState('');
  const [addCount, setAddCount] = useState<number>(5);

  const deleteTodos = () => {
    const newTodoList = todoList.filter((todo) => !todo.completed);
    setTodoList(newTodoList);
  };

  const addTodo: any = () => {
    if (todo !== '') {
      const newTodo = {
        id: todoList.length + 1,
        type: 'radio',
        nameTodo: 'todo-list',
        contain: todo,
        completed: false,
      };
      setTodoList([...todoList, newTodo]);
      setAddCount(addCount + 1);
    }
  };

  const handleTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleClickInput = (id: any) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
    setAddCount(addCount - 1);
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
              <li key={todo.id} className={todo.completed ? 'completed' : ''}>
                <input
                  type={todo.type}
                  onClick={() => {
                    handleClickInput(todo.id);
                  }}
                />
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
