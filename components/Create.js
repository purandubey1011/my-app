import { useState } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {

  console.log(props)
  const {tasks,setTasks} = props
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const createTaskHandler = (e) => {
    e.preventDefault()

    const todo = {
      id: nanoid(),
      title,
      desc
    }
    console.log(todo)

    setTasks([...tasks, todo])

    setTitle(' ')
    setDesc(' ')
  }
 

  return (
    <>
      <h2 className="mb-5 fs-2 fw-light">Todo-App</h2>

      <form onSubmit={createTaskHandler}>

        <input
          type="text"
          placeholder='Title'
          className='form-control mb-3 w-50'
          onChange={(e) => { setTitle(e.target.value) }}
          value={title}
        />
        <input
          type="text"
          className='mb-3 w-50 form-control'
          placeholder='description'
          onChange={(e) => { setDesc(e.target.value) }}
          value={desc}
        />
        <button className='btn bg-primary text-white'>Submit</button>

      </form> <hr className='w-50' />
    </>
  )
}

export default Create