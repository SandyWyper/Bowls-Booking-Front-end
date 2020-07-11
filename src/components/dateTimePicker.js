import React, { Component } from "react"
import InputMoment from "input-moment"
import moment from "moment"

class DateTimePicker extends Component {
  state = {
    m: moment(),
  }

  handleChange = m => {
    this.setState({ m })
  }

  handleSave = () => {
    console.log("saved", this.state.m.format("llll"))
  }

  render() {
    return (
      <div className="">
        <form>
          <div className="input">
            <input type="text" value={this.state.m.format("llll")} readOnly />
          </div>
          <InputMoment
            moment={this.state.m}
            onChange={this.handleChange}
            minStep={5}
            onSave={this.handleSave}
          />
        </form>
      </div>
    )
  }
}

export default DateTimePicker
