import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [info,setInfo] = useState([])

  useEffect(() => {
       axios.get("/api/data")
        .then((response) => {
            setInfo(response.data)
        })
        .catch((err) => {
          console.log(err);
        })
  })

  return (
    <div className='app'>
       <h1>Full-Stack Basics </h1>
       <p>DATA : {info.length}</p>

       {info.map((item,index) => (
        <div key={item.id}>
          <p>{item.name}</p>
        </div>
       ))}
    </div>
  )
}

export default App
