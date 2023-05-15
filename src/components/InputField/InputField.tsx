import React,{useRef} from 'react'
import "./inputfield.scss"
interface Props{
  todo: string;
  setTodo:React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e:React.FormEvent) => void;
}
const InputBox:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
      <form className='input-field' onSubmit={(e) => {
        handleAdd(e)
        inputRef.current?.blur()
        }}>
        <input ref={inputRef} type="input" value={todo} onChange={e=>setTodo(e.target.value)} placeholder='Enter a task' className='input' />
        <button className='input-submit'>Go</button>
      </form>
  )
}

export default InputBox