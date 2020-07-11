import React, { createContext } from "react"

const defaultUsersContext = {
  isLoggedIn: false,
  userName: null,
  userEmail: null,
  userID: null,
  isButtonToggled: false,
}

export const UserContext = createContext({})
