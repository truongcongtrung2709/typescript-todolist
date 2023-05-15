import React from 'react'
import { Todo } from '../../Model/model'
import { AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./singletodo.scss"
type Props ={
  todo: Todo
  todos: Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo = ({todo, todos, setTodos}: Props) => {
  return (
    <form className='single-todo'>
      <span className="single-todo__text">{todo.todo}</span>
      <div className='icons'>
        <span className="icon"><AiFillEdit/></span>
        <span className="icon"><AiFillDelete/></span>
        <span className="icon"><MdDone/></span>
      </div>
    </form>
  )
}

export default SingleTodo