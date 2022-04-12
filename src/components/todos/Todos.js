import React from 'react'
import Todo from './Todo'
const todos = (props) => {
  return (
    <div className='todos-list'>
      {props.todos.map((todo) => {
        return <
          Todo todo={todo}
          key={todo.id}
          changTodoCompletion={props.changTodoCompletion}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}
        />
      })}
      {props.todos.length === 0 ? (<h3 className='no-todos'>لايوجد مهام حالياً ... </h3>) : null}
    </div>
  )
}
export default todos