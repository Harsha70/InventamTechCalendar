import { connect } from 'react-redux';
import { userLogout } from "../redux/events/events.action";
import {Button} from '@material-ui/core'


const Signinsignout = ({setsign, sign, ApiCalendar,dispatch}) => {
    const signUpdate= (sign) => {
        console.log('sign', sign)
        setsign(
          sign
        );
      }
    
        ApiCalendar.onLoad(() => {
            ApiCalendar.listenSign(signUpdate);
        });
    


    const handleItemClick = async(event, sign) => {
      if (sign === "sign-in") {
        ApiCalendar.gapi.auth2
      .getAuthInstance()
      .signIn({
        scope:
          "https://www.googleapis.com/auth/calendar https://www.googleapis.com/auth/calendar.readonly"
      })
      .then(
        function () {
        setsign(ApiCalendar.sign)
        },
        function (err) {
          console.error("Error signing in", err);
        }
      );
        
      } else if (sign === "sign-out") {
        ApiCalendar.handleSignoutClick();
        dispatch((userLogout()));
      }
    }
  
    return (
      <>
        {sign ? 
        <Button variant='contained' color='primary' onClick={(e) => handleItemClick(e, "sign-out")}> sign-out </Button>
        :
        <Button variant='contained' color='primary' onClick={(e) => handleItemClick(e, "sign-in")}> sign-in </Button> }
      </>
    );
  }
 export default connect()(Signinsignout)
