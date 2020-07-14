import React, { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import moment from "moment"

import DateTimePicker from "../components/dateTimePicker"

const Admin = () => {
  const [startTime, setStartTime] = useState({ m: moment() })
  const [endTime, setEndTime] = useState({ m: moment() })

  const handleStartTimeChange = moment => {
    setStartTime({ m: moment })
  }
  const handleEndTimeChange = moment => {
    setEndTime({ m: moment })
  }

  return (
    <Layout>
      <SEO title="Admin" />
      <div className="flex justify-around my-8">
        <div>
          <h3>StartTime</h3>
          <DateTimePicker
            value={startTime.m}
            onChange={handleStartTimeChange}
          />
        </div>
        <div>
          <h3>End Time</h3>
          <DateTimePicker value={endTime.m} onChange={handleEndTimeChange} />
        </div>
      </div>
      <hr />
    </Layout>
  )
}
export default Admin
