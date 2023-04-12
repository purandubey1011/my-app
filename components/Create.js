import { useState,useRef } from 'react'
import { nanoid } from 'nanoid'

const Create = (props) => {

  // console.log(props)

  const titleElem = useRef()
  const [error,setError] =useState(false)
  

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
    // console.log(todo)

    setTasks([...tasks, todo])

    setTitle(' ')
    setDesc(' ')
  }
  
  const changeTitle = (e) =>{
    let inputlength = titleElem.current.value.length;

        if (inputlength >= 4) {
            setError(false);
            // console.log(error)
        } else {
            setError(true);
        }
        setTitle(e.target.value);

    // console.log(titleElem.current.value)
    // console.log(titleElem.current.style.border="20px solid green")
    // titleElem.current.style.border="20px solid green"
    // alert('lwde')
    // console.log(e)
  }

  return (
    <>

      <h2 className="mb-5 fs-2 fw-light">Todo-App</h2>

      <form onSubmit={createTaskHandler}>

        <div className="mb-3">
        <input
          ref={titleElem}
          type="text"
          placeholder='Title'
          className='form-control mb-3 w-50'
          onChange={changeTitle}
          value={title}
        />
        <small className='text-danger'>
          {error && "invalid title value"}
        </small>

        </div>

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