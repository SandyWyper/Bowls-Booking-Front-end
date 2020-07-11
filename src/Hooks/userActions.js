// import React, { useState, createContext } from "react"
// import { Endpoints } from "../constants/Endpoints"

// const defaultUsersContext = {
//   isLoggedIn: false,
//   userName: null,
//   userEmail: null,
//   userID: null,
//   isButtonToggled: false
// }

// const userContext = createContext(defaultUserContext)

// export const getAllUsers = () => {
//   const [isLoading, setIsLoading] = useState(true)

//   fetch(Endpoints.user.getAll.uri, {
//     method: Endpoints.user.getAll.method,
//   })
//     .then(res => res.json())
//     .then(res => {
//       // setUsers(res)
//       console.log(userContext)
//       setIsLoading(false)
//     })
//     .catch(err => {
//       setIsLoading(false)
//       console.log("this is and error: ", err)
//     })
// }

// export const toggleButton = () => {
//  setState(userContext=>{...userContext, !userContext.isButtonToggled})
// }

export const getUsers = () => {
  fetch(Endpoints.user.getAll.uri, {
    method: Endpoints.user.getAll.method,
  })
    .then(res => res.json())
    .then(res => {
      return res
    })
    .catch(err => {
      setIsLoading(false)
      console.log("this is and error: ", err)
    })
}
