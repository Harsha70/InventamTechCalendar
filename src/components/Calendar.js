import moment from 'moment'
import React from 'react'

import "react-big-calendar/lib/css/react-big-calendar.css";

import { connect } from "react-redux";

import { Calendar, momentLocalizer } from "react-big-calendar";
const localizer = momentLocalizer(moment) 

const MyCalendar = ({eventItems, calendarlist}) => {

    return (
    <div>
    <Calendar
      localizer={localizer}
      events={eventItems}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
    )
}

const mapStateToProps = (state) => {
  return({
  eventItems:state.events.eventItems,
  calendarlist:state.calenderlist.calendarlist.find(item=>item.backgroundColor==="#16a765")
});
}

export default connect(mapStateToProps)(MyCalendar)