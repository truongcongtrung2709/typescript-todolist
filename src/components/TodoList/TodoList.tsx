import React from 'react'
import "./todolist.scss"
import { Todo } from '../../Model/model';
import SingleTodo from '../SingleTodo';
interface Props{
  todos: Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos}) => {
  return (
    <div className='todo-list'>
      {todos.map((t)=>(
        <SingleTodo todo={t} key={t.id} todos={todos} setTodos = {setTodos}/>
      ))}
    </div>
  )
}

export default TodoList