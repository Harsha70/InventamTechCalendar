import React,{useState} from 'react'
import { connect } from "react-redux";
import { addEvent } from "../redux/events/events.action";
import { removeEvent } from "../redux/events/events.action";
import { withStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const ViewCalendarList = ({description, id, selected, summary, backgroundColor, addEvent, removeEvent, calendarlist, eventItems}) => {
    const [check, setcheck] = useState()

    const CustomCheckbox = withStyles({
        root: {
          color: backgroundColor,
          "&$checked": {
            color: backgroundColor
          }
        }})((props) => <Checkbox color="default" {...props} />);

    const toggleCheck=(event)=> {
        if(event.target.checked){
            const calendaritems=calendarlist.find(item=>item.id===id).items
            calendaritems.forEach(item=>addEvent(item))
        }else{
            const calendaritems=calendarlist.find(item=>item.id===id).items
            calendaritems.forEach(item=>removeEvent(item))
        }
        setcheck(event.target.checked );
      }

    return (

        <div style={{ width: 200, background: '#fff', paddingTop: 10, paddingLeft:10 }} >
            <FormGroup >
                <FormControlLabel
                control={
                <CustomCheckbox
                    onChange={toggleCheck}
                    value={summary}
                    name={summary}
                    checked={check}
                />
                }
                label={summary.substring(0, 10).concat("......")}/>
            </FormGroup>
        </div>

    )
}

const mapStateToProps = (state) => {
    return({
    eventItems:state.events.eventItems,
    calendarlist:state.calenderlist.calendarlist
  });
  }

const mapDispatchToProps = dispatch => ({
    addEvent: item => dispatch(addEvent(item)),
    removeEvent: item => dispatch(removeEvent(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewCalendarList)
