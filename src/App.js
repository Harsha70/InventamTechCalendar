import './App.css';
import MyCalendar from './components/Calendar'
import Signinsignout from './components/Signinsignout'
import Eventscomponent from './components/Eventscomponent'
import { useState } from 'react';
import ApiCalendar from "react-google-calendar-api";

const App = () => {
  const [sign, setsign] = useState(ApiCalendar.sign)

  return (
    <div className="App">
      <Signinsignout setsign={setsign} sign={sign} ApiCalendar={ApiCalendar}/>
      <div style={{display:'grid', gridTemplateColumns: '1fr 5fr'}}>
      {sign && <Eventscomponent />}
      {sign && <MyCalendar />}
      </div>
    </div>
  );
}

export default App;


// https://developers.google.com/calendar/v3/reference/calendarList/list
// https://developers.google.com/calendar/v3/reference/events/list
// https://developers.google.com/calendar/v3/reference/calendarList/list?apix=true#try-it
// https://github.com/Kubessandra/react-google-calendar-api/blob/master/src/ApiCalendar.js#L213
// https://www.npmjs.com/package/react-google-calendar-api
// https://codesandbox.io/s/googlecalendar-woco4?file=/src/test.js
// https://stackoverflow.com/questions/42626188/styling-a-checkbox-in-a-reactjs-environment