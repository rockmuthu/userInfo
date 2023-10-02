import { useState } from 'react'
import * as React from 'react';

function App() {

  const [data, setData] = useState([])


  const click = () => {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => setData(data))
  }

  return (
    <>
      <button onClick={click}>Get Data</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.name}</td>
              <td>{row.age}</td>
              <td>{row.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
