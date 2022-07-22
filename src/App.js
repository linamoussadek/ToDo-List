import React from 'react';
import Todo from './Todo';

function App(props) {
    return (
    <div className={"todoapp stack-large"}>
      <h1>To Do List</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor={"new-todo-input"}>
            What needs to be done?
          </label>
        </h2>
          <input
              type="text"
              id="new-todo-input"
              className="input input__lg"
              name="text"
              autoComplete="off"
          />
          <button type="submit" className="btn btn__primary btn__lg">
              Add
          </button>
      </form>
        <h2 id="list-heading">
            3 tasks remaining
        </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
            <Todo name="Eat" completed={true} id="todo-0"/>
            <Todo name="Sleep" completed={false} id="todo-1"/>
            <Todo name="Repeat" completed={false} id="todo-2"/>
        </ul>
    </div> );
}

export default App;
