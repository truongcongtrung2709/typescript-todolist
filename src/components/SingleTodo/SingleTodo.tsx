import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../../Model/model'
import { AiFillDelete,AiFillEdit} from 'react-icons/ai'
import { MdDone } from 'react-icons/md'
import "./singletodo.scss"
import { Draggable } from 'react-beautiful-dnd'
type Props ={
  index: number
  todo: Todo
  todos: Todo[]
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({index , todo, todos, setTodos}: Props) => {
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [editValue, setEditValue] = useState<string>(todo.todo)
  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id? {...todo,isDone:!todo.isDone}:todo))
  }
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo)=>(todo.id !== id)))
  }
  const handleEdit = (e:React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(todos.map((todo)=>todo.id === id? {...todo,todo:editValue}:todo))
    setIsEdit(false);
  }
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputRef.current?.focus();
  }, [isEdit])
  
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided)=>(
        <form className='single-todo' onSubmit={(e)=>{handleEdit(e,todo.id)}} {...provided.draggableProps}{...provided.dragHandleProps} ref={provided.innerRef}>
        {
          isEdit ? (
            <input ref={inputRef} className='single-todo__editInput' type="text" value={editValue} onChange={e=>{setEditValue(e.target.value)}}  />
          ):(
            todo.isDone ? (
              <s className="single-todo__text">{todo.todo}</s>
            )
            :(<span className="single-todo__text">{todo.todo}</span>)
          )
        }
        
        
        <div className='icons'>
          <span className="icon"
          onClick={()=>{if(!isEdit && !todo.isDone){
            setIsEdit(!isEdit);
          }
        }
      }
           ><AiFillEdit/></span>
          <span className="icon"
          onClick={()=> handleDelete(todo.id)}
          ><AiFillDelete/></span>
          <span className="icon"
          onClick={()=> handleDone(todo.id) }
          ><MdDone/></span>
          </div>
      </form>
      )}
    
    </Draggable>
  )
}

export default SingleTodo