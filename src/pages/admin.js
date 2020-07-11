import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import { Endpoints } from "../constants/Endpoints"
// import UsersList from "../components/usersList"

import DateTimePicker from "../components/dateTimePicker"

const Admin = () => {
  return (
    <Layout>
      <SEO title="Admin" />
      <DateTimePicker />
      <DateTimePicker />
    </Layout>
  )
}
export default Admin
