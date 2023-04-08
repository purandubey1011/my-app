import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { Fragment } from 'react'

const index = () => {
  // javascript logic start

  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const createTaskHandler =(e) =>{
      e.preventDefault()

      const todo = {
        id:nanoid(),
        title:title ,
        desc : desc
      }
      console.log(todo)
  }
  // ******end*******
  return (

    <div className='container mt-5 p-5 bg-light'>
        <h2 className="mb-5 fs-2 fw-light">Todo-App</h2>

        <form onSubmit={createTaskHandler}>

          <input 
          type="text" 
          placeholder='Title'
          className='form-control mb-3 w-50'
          onChange={(e)=>{setTitle(e.target.value)}}
          value={title}
          />
          <input
                 type="text" 
                 className='mb-3 w-50 form-control'
                 placeholder='description'
                 onChange={(e)=>{setDesc(e.target.value)}}
                 value={desc}
          />
          <button className='btn bg-primary text-white'>Submit</button>

        </form> <hr className='w-50'/>

            <ul id='list' className="list-group w-50">
                <h3 className="mb-3 fs-3 fw-light">Pending tasks</h3>

                <li className="fs-4 d-flex justify-content-between list-group-item">
                    Item 1<i className="text-danger ri-delete-bin-2-line"></i>
                </li>
            </ul>

    </div>

  )
}

export default index