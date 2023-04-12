import React from 'react'

const Show = (props) => {

    const {tasks,setTasks} = props

    let deletetaskhandler = (id) => {
        let copytask = tasks.filter((task) => task.id != id )
        setTasks(copytask)
        }
        
        let tasklist = (
        <h3 className="mb-3 fs-3 fw-light">no Pending tasks</h3>
        )

        if (tasks.length > 0) {
        tasklist = tasks.map((task, index) => (
            <li
            key={task.id}
            className="fs-4 d-flex justify-content-between list-group-item"
            >
            {task.title}
            <i
                onClick={() => deletetaskhandler(task.id)}
                className="text-danger ri-delete-bin-2-line"
            ></i>
            </li>
        ))
        }

  return (
    <ul id='list' className="list-group w-50">
        <h3 className="mb-3 fs-3 fw-light">Pending tasks</h3>

        {tasklist}
    </ul>
  )
}

export default Show