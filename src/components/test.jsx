import React, { useState, useEffect } from "react"
import axios from "axios"

function HelloWorld() {
  const [tests, setTests] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/tests/")
      .then((response) => {
        setTests(response.data)
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error)
      })
  }, [])

  return (
    <div>
      <h1>Test Table</h1>
      <ul>
        {tests.map((test) => (
          <li key={test.id}>{test.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default HelloWorld
