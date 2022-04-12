import React, { useState } from 'react'
import FeatherIcon from 'feather-icons-react'
const TodosForm = (props) => {
  const [newTitle, setNewTitle] = useState('');
  const [editRender, seteditRender] = useState(false);
  if (props.mode === 'edit' && !editRender) {
    setNewTitle(props.todos[0].title);
    seteditRender(true);
  }
  const newTitleHandler = (event) => {
    setNewTitle(event.target.value);
  };
  const addTodoHandler = () => {
    let nTitle = newTitle;
    setNewTitle("");
    seteditRender(false);
    return props.addTodoHandler(nTitle);
  };
  let btnString = "إضافة";
  if (props.mode === 'edit') {
    btnString = "تعديل";
  }
  return (
    <div className='todos-form'>
      <div className='todos-form_icon'>
        <FeatherIcon icon={'circle'}
          onClick={props.showUnCompletedHandel} />
      </div>
      <div className='todos-form_form'>
        <input type="text"
          placeholder='إضافة مهمة جديدة'
          value={newTitle} onChange={newTitleHandler} />
      </div>
      <div className='todos-form_submit'>
        <input type="button" className='btn'
          value={btnString}
          onClick={addTodoHandler}
          disabled={newTitle.trim() ? false : true} />
      </div>
    </div>
  )
}
export default TodosForm