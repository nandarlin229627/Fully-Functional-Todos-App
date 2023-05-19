import './reset.css';
import './App.css';
<<<<<<< HEAD
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import CheckAllAndReaining from './components/CheckAllAndReaining';
import TodoFilters from './components/TodoFilters';
import ClearCompletedBtn from './components/ClearCompletedBtn';
import { useEffect, useState } from 'react';
=======
>>>>>>> parent of 7c72a41 (Api Setup and Components Extracation)

function App() {

  let [ todos ,setTodos ] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/todos')
    .then(res => res.json())
    .then((todos) => {
      setTodos(todos);
    })
  },[])

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
<<<<<<< HEAD
        <TodoForm/>
        <TodoList todos = {todos}/>
        <CheckAllAndReaining/>
        <div className="other-buttons-container">         
          <TodoFilters/>
          <ClearCompletedBtn/>
=======
        <form action="#">
          <input
            type="text"
            className="todo-input"
            placeholder="What do you need to do?"
          />
        </form>

        <ul className="todo-list">
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">Finish React Series</span>
              {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
            </div>
            <button className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label line-through">
                Go to Grocery
              </span>
              {/* <input type="text" className="todo-item-input" value="Go to Grocery" /> */}
            </div>
            <button className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">Do other thing</span>
              {/* <input type="text" className="todo-item-input" value="Do other thing /> */}
            </div>
            <button className="x-button">
              <svg
                className="x-button-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button">Clear completed</button>
          </div>
>>>>>>> parent of 7c72a41 (Api Setup and Components Extracation)
        </div>
      </div>
    </div>
  );
}

export default App;
