import React, { useEffect, useState } from 'react'
import ApiCalendar from "react-google-calendar-api";

const CalendarList = () => {
    const [calenderlist, setcalenderlist] = useState([])
    useEffect(() => {
        ApiCalendar.gapi.client.calendar.calendarList
        .list({})
        .then((response) => JSON.parse(response.body))
        .then(response=>{
            console.log(response.items)
            setcalenderlist(response.items)
        })
    }, [])
      
    return (
        <div>
            {calenderlist && calenderlist.map(cal=> <h1> {cal.summary} </h1>)}
        </div>
    )
}

export default CalendarList
