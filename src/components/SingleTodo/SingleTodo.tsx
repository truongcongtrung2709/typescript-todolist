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
  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id? {...todo,isDone:!todo.isDone}:todo))
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo)=>(todo.id !== id)))
  }
  return (
    <form className='single-todo'>
      {
        todo.isDone ? (
          <s className="single-todo__text">{todo.todo}</s>
        )
        :(<span className="single-todo__text">{todo.todo}</span>)
      }
      <div className='icons'>
        <span className="icon"
        //  onClick={handleEdit}
         ><AiFillEdit/></span>
        <span className="icon"
        onClick={()=> handleDelete(todo.id)}
        ><AiFillDelete/></span>
        <span className="icon"
        onClick={()=> handleDone(todo.id) }
        ><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo