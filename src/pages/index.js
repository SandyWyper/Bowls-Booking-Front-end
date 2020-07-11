import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Endpoints } from "../constants/Endpoints"
import UsersList from "../components/usersList"

const IndexPage = () => {
  const [userData, setUserData] = useState()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(Endpoints.user.getAll.uri, {
      method: Endpoints.user.getAll.method,
    })
      .then(res => res.json())
      .then(res => {
        setUserData(res)
        setIsLoading(false)
      })
      .catch(err => {
        setIsLoading(false)
        console.log("this is and error: ", err)
      })
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      {isLoading ? (
        <h4>Please wait, loading.</h4>
      ) : !userData ? (
        <h4>No dtata</h4>
      ) : (
        <UsersList users={userData} />
      )}
    </Layout>
  )
}
export default IndexPage
