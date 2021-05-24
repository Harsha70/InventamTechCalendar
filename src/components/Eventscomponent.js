import React, { useEffect } from 'react'
import ApiCalendar from "react-google-calendar-api";
import { connect } from "react-redux";
import { addEvent } from "../redux/events/events.action";
import { setCalenderlist } from "../redux/calendarlist/calendarlist.action"
import ViewCalendarList from './ViewCalendarList'
import {Button} from '@material-ui/core'


const Eventscomponent = ({addEvent, setCalenderlist, calenderlist}) => {
  console.log("calenderlist",calenderlist)
    useEffect(() => {
        if (ApiCalendar.sign){
            ApiCalendar.listEvents({
              timeMin: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
              timeMax: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000).toISOString(),
              showDeleted: true,
              maxResults: 10,
              orderBy: 'updated',
            }).then(({ result }) => {
                result.items.forEach(item=>{
                    const addevent = {
                        id:item.id,
                        title:item.summary,
                        desc:item.description,
                        start:item.start.date?new Date(item.start.date):new Date(item.start.dateTime),
                        end:item.end.date?new Date(item.end.date):new Date(item.end.dateTime)
                    }
                    addEvent(addevent)
                })
                
            });
            }
            
        ApiCalendar.gapi.client.calendar.calendarList
        .list({})
        .then((response) => JSON.parse(response.body))
        .then(response=>{
          response.items.forEach((item)=>{
            const id = item.id
            const calendaritem={
              id:item.id,
              backgroundColor:item.backgroundColor,
              description:item.description?item.description:"Empty description",
              summary: item.summary? item.summary:'Empty summary'
            }
            // console.log("id--->",id)
            ApiCalendar.gapi.client.calendar.events.list({"calendarId":id})
            .then((data)=> {
              let documents = []
              data.result.items.forEach(item=>{
                const addevent = {
                    id:item.id,
                    title:item.summary,
                    desc:item.description,
                    start:item.start.date?new Date(item.start.date):new Date(item.start.dateTime),
                    end:item.end.date?new Date(item.end.date):new Date(item.end.dateTime)
                }
                documents.push(addevent)
            })
                setCalenderlist({...calendaritem, items:documents})
                console.log("Response", documents);
              },
              function(err) { console.error("Execute error", err); });
          })
            
          })

    }, [addEvent, setCalenderlist])


    const createEvent = () => {
        const eventFromNow = {
          summary: "newevent",
          time: new Date(),
          description:'testing2'
        };
      
      ApiCalendar.createEventFromNow(eventFromNow)
        .then((result) => {
          console.log("createEvent",result, "--------ApiCalendar---------",ApiCalendar);
        })
         .catch((error) => {
           console.log(error);
        });
      }


    return (
        <div>
            <Button variant='contained' color='primary' onClick={createEvent} disabled> Create Event </Button>        
            <div style={{textAlign: 'initial', padding:'10px'}}>
              {calenderlist && calenderlist.map(calender=> <ViewCalendarList key={calender.id} {...calender} /> )}
              </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addEvent: item => dispatch(addEvent(item)),
    setCalenderlist: item => dispatch(setCalenderlist(item))
})

const mapStateToProps = (state) => {
  return({
    calenderlist:state.calenderlist.calendarlist,
});
}

export default connect(mapStateToProps, mapDispatchToProps)(Eventscomponent)


