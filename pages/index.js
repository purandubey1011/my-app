import Create from "@/components/Create";
import Show from "@/components/Show";
import { useState } from 'react'

const index = () => {
  // javascript logic start

  const [tasks, setTasks] = useState([])

 

  // ******end*******
  return (

    <div className='container mt-5 p-5 bg-light'>
      
      {/* <Create tasks={tasks} setTasks={setTasks}/> */}
      <Create tasks={tasks} setTasks={setTasks}>
                <h1>Bahut he jyaza secret information</h1>
      </Create>
      <Show tasks={tasks} setTasks={setTasks}/>

    </div>

  )
}

export default index