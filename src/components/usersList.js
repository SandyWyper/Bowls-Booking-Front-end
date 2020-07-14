import React from "react"
import PropTypes from "prop-types"

const UsersList = props => {
  const { users } = props
  // Proptypes expects type of array, but this log returns object????

  return (
    <div className="p-8 bg-blue-200">
      <ul>
        {users.map(user => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
}

export default UsersList
