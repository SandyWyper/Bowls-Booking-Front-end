import React, { useState, useEffect } from "react"
import { Endpoints } from "../constants/Endpoints"

const APIHook = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [users, setUsers] = useState(undefined)

  const handleClick = () => {
    setIsLoading(true)

    fetch(Endpoints.user.getAll.uri, {
      method: Endpoints.user.getAll.method,
    })
      .then(res => res.json())
      .then(res => {
        setUsers(res)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.log("this is and error: ", err)
      })
  }

  // useEffect(() => {})
  return (
    <div className="mt-8">
      <button
        onClick={handleClick}
        className="border p-2 bg-yellow-500 shadow-lg"
      >
        Fetch Users
      </button>
      <ul>
        {users &&
          users.map(user => (
            <li key={user._id}>
              {user.name} - {user.email}
            </li>
          ))}
      </ul>
    </div>
  )
}
export default APIHook
