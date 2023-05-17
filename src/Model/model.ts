
export interface Todo{
  id: number,
  todo: string, 
  isDone: boolean
}

// //Use Reducer:
// //1. init State
// //2. Actions
// //3. Reducer
// //4. Dispatch

// //1. init State
// const initialState = 0

// //2.Actions
// const UP_ACTION = "up"
// const DOWN_ACTION = "down"

// //3.Reducer
// const reducer = (state :number, action:string) =>{
//   switch(action){
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state -1;
//     default:
//       throw new Error(`Invalid action`)
//   }
// }

// const [count, dispatch] = useReducer(reducer, initialState)

// type Actions =
// |{type: "add", payload: string}
// |{type: "remove", payload: number}
// |{type: "done", payload: number}

// const TodoReducer = (state:Todo[], action: Actions) =>{
//   switch (action.type){
//     case "add":
//       return [...state, {id:Date.now(), todo: action.payload, isDone: false}]
//     case "remove":
//       return state.filter((todo) => todo.id !== action.payload);
//     case "done":
//       return state.map((todo) => todo.id !== action.payload ? {...todo, isDone: !todo.isDone}:todo)
//     default:
//       return state
//   }
// }
// import React from 'react'
// import { useReducer } from "react"

// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, []);
//   return <div />;
// }

// export default ReducerExample