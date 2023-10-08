import { useState, useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function App() {

  const [data, setData] = useState([])
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const url = "http://localhost:5000/"

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
  })

  const click = () => {
    const data = {
      "name": name,
      "age": age,
      "email": email,
    }

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log("Data Send")
        setName('')
        setAge('')
        setEmail('')
      })
  }

  return (
    <>
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label="Name" variant="standard"
          value={name} onChange={(e) => setName(e.target.value)} />
        <TextField id="standard-basic" label="Age" variant="standard"
          value={age} onChange={(e) => setAge(e.target.value)} />
        <TextField id="standard-basic" label="Email" variant="standard"
          value={email} onChange={(e) => setEmail(e.target.value)} />
      </Box>

      <button onClick={click}>Save</button>


      <TableContainer component={Paper} style={{ width: 500 }}>
        <Table sx={{ maxWidth: 500 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">#</TableCell>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Age</TableCell>
              <TableCell align="left">Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="left">{i + 1}</TableCell>
                <TableCell align="left">{row.name}</TableCell>
                <TableCell align="left">{row.age}</TableCell>
                <TableCell align="left">{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default App
