import React from 'react'
import "./todolist.scss"
import { Todo } from '../../Model/model';
import SingleTodo from '../SingleTodo';
import { Droppable } from 'react-beautiful-dnd';
interface Props{
  todos: Todo[];
  setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
  completeTask: Todo[];
  setCompleteTask:React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList:React.FC<Props> = ({todos,setTodos, completeTask, setCompleteTask}) => {
  return (
    <div className='todo-list'>
      <Droppable droppableId='TodosList'>
        {
          (provided, snapshot)=>(
      <div className={`active-tasks tasks-box ${snapshot.isDraggingOver?'dragactive': '' }`} ref={provided.innerRef} {...provided.droppableProps} >
                <h2 className='tasks-title'>Active Tasks</h2>
              {todos.map((t,index)=>(
              <SingleTodo index={index} todo={t} key={t.id} todos={todos} setTodos = {setTodos}/>
            ))}
            {provided.placeholder}
              </div>
          )
        }
        
        </Droppable>
        <Droppable droppableId='TodosRemove'>
          {(provided, snapshot)=>(
            <div className={`complete-tasks tasks-box remove ${snapshot.isDraggingOver ? "dragcomplete":""}`} ref={provided.innerRef} {...provided.droppableProps}>
            <h2 className='tasks-title'>Complete Tasks</h2>
            {completeTask.map((t,index)=>(
            <SingleTodo index={index} todo={t} key={t.id} todos={todos} setTodos = {setCompleteTask}/>
          ))}
          {provided.placeholder}
            </div>
          )}
        
        </Droppable>
    </div>

  )
}

export default TodoList