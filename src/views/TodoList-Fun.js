import React, { useState } from 'react'
import Todos from '../components/todos/Todos'
import TodosForm from '../components/todos/TodosForm'

const TodoList = () => {
  const initiatState = localStorage.getItem("todos") ?
    JSON.parse(localStorage.getItem("todos"))
    : [];
  const [todos, setTodos] = useState(initiatState);
  const [mode, setMode] = useState('add');
  const setLocal = (todos) => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const [activeTodo, setActiveTodo] = useState({});
  const changTodoCompletion = (id) => {
    const curTodos = [...todos];
    const newtodos = curTodos.map((el) => {
      if (el.id === id) {
        el.done = !el.done;
        return el;
      }
      return el;
    });
    setLocal(newtodos);
    setTodos(newtodos);
  };
  const deleteTodo = (id) => {
    const curTodos = [...todos]
    const newTodos = curTodos.filter((el) => el.id !== id);
    setLocal(newTodos);
    setTodos(newTodos);
  };
  const addTodoHandler = (title) => {
    if (mode !== 'edit') {
      const newTodo = {
        id: Date.now(),
        title: title,
        done: false,
      };
      const newTodos = [...todos, newTodo];
      setLocal(newTodos);
      setTodos(newTodos);
    } else {
      const curTodos = [...todos];
      const newTodos = curTodos.map((el) => {
        if (el.id === activeTodo.id) {
          el.title = title;
          return el;
        }
        return el;
      });
      setLocal(newTodos);
      setTodos(newTodos);
      setActiveTodo({});
      setMode("add");
    }
  };
  const showUnCompletedHandel = () => {
    if (mode === 'not-done') {
      setMode("add");
    } else {
      setMode("not-done");
    }
  }
  let curTodos = [...todos];
  if (mode === 'not-done') {
    curTodos = curTodos.filter((todo) => !todo.done);
  }
  const editTodo = (todo) => {
    setMode('edit');
    setActiveTodo(todo);
  };
  return (
    <main>
      <div className='container'>
        <div className='todos'>
          <TodosForm
            addTodoHandler={addTodoHandler}
            showUnCompletedHandel={showUnCompletedHandel}
            todos={mode !== 'edit' ? curTodos : [activeTodo]}
            mode={mode} />
          <Todos
            todos={mode !== 'edit' ? curTodos : [activeTodo]}
            changTodoCompletion={changTodoCompletion}
            deleteTodo={deleteTodo}
            editTodo={editTodo} />
        </div>
      </div>
    </main>
  )
}
export default TodoList