import React from "react"
import InputMoment from "input-moment"

const DateTimePicker = props => {
  return (
    <div>
      <form>
        <div className="mb-4">
          <input type="text" value={props.value.format("llll")} readOnly />
        </div>
        <InputMoment
          moment={props.value}
          onChange={props.onChange}
          hourStep={1} // default
          minStep={5}
          // onSave={props.handleSave}
          prevMonthIcon="ion-ios-arrow-left" // default
          nextMonthIcon=">ion-ios-arrow-right" // default
        />
      </form>
    </div>
  )
}

export default DateTimePicker
