import React, { useState } from 'react'

const index = () => {
  const [name, setName] = useState('Rahul')
  let naambadalnahai = () =>{
    console.log('click hua haiii')
    setName('rahul bhaiya')
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={naambadalnahai}>chnage name</button>
    </div>
  )
}

export default index