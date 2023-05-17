import React, { useState } from 'react';
import  InputField  from './components/InputField';
import './App.scss';
import {Todo} from"./Model/model"
import TodoList from './components/TodoList/TodoList';
import { DragDropContext, DropResult } from "react-beautiful-dnd";

const App: React.FC = () =>  {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([])
  const [completeTask, setCompleteTask] = useState<Todo[]>([])
  const handleAdd = (e: React.FormEvent) =>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }
  }
  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    if(!destination) return;
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add, active= todos, complete = completeTask;
    if(source.droppableId === "TodosList"){
      add = active[source.index];
      active.splice(source.index,1)
    }else{
      add = complete[source.index];
      active.splice(source.index,1)
    }
    if(destination.droppableId === "TodosList"){
      active.splice(destination.index,0,add);
    }else{
      complete.splice(destination.index,0,add)
    }
    setCompleteTask(complete)
    setTodos(active)
  }
  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <h1 className='heading'>
        To-do-list
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos = {setTodos} completeTask={completeTask} setCompleteTask={setCompleteTask}/>
    </div>
    </DragDropContext>
  );
}

export default App;
